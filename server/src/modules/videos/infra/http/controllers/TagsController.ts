import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTagsService from '@modules/videos/services/ListTagsService';
import CreateTagService from '@modules/videos/services/CreateTagService';

export default class TagsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTagsService = container.resolve(ListTagsService);
    const tags = await listTagsService.execute();

    return response.json(tags);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, area_id } = request.body;

    const createTagService = container.resolve(CreateTagService);

    const area = await createTagService.execute({ name, area_id });

    return response.json(area);
  }
}
