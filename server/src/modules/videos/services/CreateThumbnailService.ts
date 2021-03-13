import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IThumbnailsRepository from '../repositories/IThumbnailsRepository';
import IVideosRepository from '../repositories/IVideosRepository';

import Thumbnail from '../infra/typeorm/entities/Thumbnail';

interface IRequest {
  name: string;
  size: number;
  key: string;
  url: string;
  video_id: string;
  filename: string;
}

@injectable()
class CreateThumbnailService {
  constructor(
    @inject('VideosRepository')
    private videosRepository: IVideosRepository,

    @inject('ThumbnailsRepository')
    private thumbnailsRepository: IThumbnailsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    name,
    size,
    key,
    video_id,
    filename,
  }: IRequest): Promise<Thumbnail> {
    const video = await this.videosRepository.findById(video_id);

    if (!video) {
      throw new AppError('Video not found!', 404);
    }

    let thumbnail;

    if (!video.thumbnail) {
      const updatedFilename = await this.storageProvider.saveFile(filename);

      thumbnail = await this.thumbnailsRepository.create({
        name,
        size,
        key,
        url: `http://localhost:3333/files/${updatedFilename}`,
        video_id,
      });
    } else {
      await this.storageProvider.deleteFile(video.thumbnail.key);

      const updatedFilename = await this.storageProvider.saveFile(filename);

      thumbnail = await this.thumbnailsRepository.save({
        ...video.thumbnail,
        name,
        size,
        key: updatedFilename,
        url: `http://localhost:3333/files/${updatedFilename}`,
      });
    }

    return thumbnail;
  }
}

export default CreateThumbnailService;
