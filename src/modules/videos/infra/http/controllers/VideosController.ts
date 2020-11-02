import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateVideoService from '@modules/videos/services/CreateVideoService';

export default class VideosController {
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
}
