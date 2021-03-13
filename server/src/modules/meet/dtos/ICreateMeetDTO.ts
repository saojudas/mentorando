import User from '@modules/users/infra/typeorm/entities/User';

export default interface ICreateTagDTO {
  title: string;
  meet_link: string;
  date_meet: Date;
  start_hour: string;
  end_hour: string;
  organizer_id: string;
  members: User[];
}
