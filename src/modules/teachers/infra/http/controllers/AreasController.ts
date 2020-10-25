import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAreasService from '@modules/teachers/services/ListAreasService';
import CreateAreaService from '@modules/teachers/services/CreateAreaService';

export default class AreasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAreasService = container.resolve(ListAreasService);
    const areas = await listAreasService.execute();

    return response.json(areas);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { isTeacher } = request.user;

    const createAreaService = container.resolve(CreateAreaService);

    const area = await createAreaService.execute({ name, isTeacher });

    return response.json(area);
  }
}
