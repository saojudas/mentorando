import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateThumbnailService from '@modules/videos/services/CreateThumbnailService';

export default class ThumbnailsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      originalname: name,
      size,
      key,
      location: url = '',
      filename,
    } = request.file;
    const { video_id } = request.params;

    const createThumbnailService = container.resolve(CreateThumbnailService);

    const thumbnail = await createThumbnailService.execute({
      name,
      size,
      key,
      url,
      video_id,
      filename,
    });

    return response.status(201).json(thumbnail);
  }
}
