import { injectable, inject } from 'tsyringe';

import Meet from '@modules/meet/infra/typeorm/entities/Meet';

import IMeetsRepository from '@modules/meet/repositories/IMeetsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  title: string;
  meet_link: string;
  members_id: string[];
  date_meet: Date;
  start_hour: string;
  end_hour: string;
  organizer_id: string;
}

@injectable()
class CreateMeetService {
  constructor(
    @inject('MeetsRepository')
    private meetsRepository: IMeetsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    title,
    meet_link,
    members_id,
    date_meet,
    start_hour,
    end_hour,
    organizer_id,
  }: IRequest): Promise<Meet> {
    // terei que criar uma regra para verificar se tem um encontro na data e hora marcada

    const checkMeetTitleExists = await this.meetsRepository.findByTitle(title);

    if (checkMeetTitleExists) {
      throw new AppError('Meet with this title already exists!');
    }

    const members = await this.usersRepository.findByIds(members_id);

    try {
      const meet = await this.meetsRepository.create({
        title,
        meet_link,
        members,
        date_meet,
        start_hour,
        end_hour,
        organizer_id,
      });

      return meet;
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export default CreateMeetService;
