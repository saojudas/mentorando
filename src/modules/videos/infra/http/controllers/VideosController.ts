import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateVideoService from '@modules/videos/services/CreateVideoService';
import ListVideosService from '@modules/videos/services/ListVideosService';
import ShowVideoService from '@modules/videos/services/ShowVideoService';

export default class VideosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listVideosService = container.resolve(ListVideosService);

    const videos = await listVideosService.execute();

    return response.json(videos);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, video_link, description, area_id, tags_ids } = request.body;
    const { id: user_id } = request.user;

    const createVideoService = container.resolve(CreateVideoService);

    const video = await createVideoService.execute({
      title,
      video_link,
      description,
      area_id,
      user_id,
      tags_ids,
    });

    return response.status(201).json(video);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { video_id } = request.params;

    const showVideoService = container.resolve(ShowVideoService);

    const video = await showVideoService.execute({ video_id });

    return response.json(video);
  }
}
