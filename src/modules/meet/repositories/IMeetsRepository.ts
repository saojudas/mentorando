import Meet from '../infra/typeorm/entities/Meet';

import ICreateMeetDTO from '../dtos/ICreateMeetDTO';

export default interface IMeetsRepository {
  create(data: ICreateMeetDTO): Promise<Meet>;
  save(meet: Meet): Promise<Meet>;
  find(): Promise<Meet[]>;
  findById(id: string): Promise<Meet | undefined>;
  findByTitle(title: string): Promise<Meet | undefined>;
  delete(id: string): Promise<void>;
}
