import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListMeetsService from '@modules/meet/services/ListMeetsService';
import CreateMeetService from '@modules/meet/services/CreateMeetService';
import CancelMeetService from '@modules/meet/services/CancelMeetService';

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const cancelMeetService = container.resolve(CancelMeetService);

    await cancelMeetService.execute({ meet_id: id });

    return response.send();
  }
}
