import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListMeetsService from '@modules/meet/services/ListMeetsService';
import CreateMeetService from '@modules/meet/services/CreateMeetService';

export default class MeetsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listMeetsService = container.resolve(ListMeetsService);
    const meets = await listMeetsService.execute();

    return response.json(meets);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title,
      meet_link,
      members_id,
      date_meet,
      start_hour,
      end_hour,
      organizer_id,
    } = request.body;

    const createMeetService = container.resolve(CreateMeetService);

    const area = await createMeetService.execute({
      title,
      meet_link,
      members_id,
      date_meet,
      start_hour,
      end_hour,
      organizer_id,
    });

    return response.json(area);
  }
}
