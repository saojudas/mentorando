import { getRepository, Repository } from 'typeorm';

import ICreateMeetDTO from '@modules/meet/dtos/ICreateMeetDTO';
import IMeetsRepository from '@modules/meet/repositories/IMeetsRepository';

import Meet from '../entities/Meet';

class MeetsRepository implements IMeetsRepository {
  private ormRepository: Repository<Meet>;

  constructor() {
    this.ormRepository = getRepository(Meet);
  }

  public async create(data: ICreateMeetDTO): Promise<Meet> {
    const meet = this.ormRepository.create(data);

    await this.ormRepository.save(meet);

    return meet;
  }

  public async save(meet: Meet): Promise<Meet> {
    await this.ormRepository.save(meet);

    return meet;
  }

  public async find(): Promise<Meet[]> {
    const meet = await this.ormRepository.find();
    return meet;
  }

  public async findByTitle(title: string): Promise<Meet | undefined> {
    const meet = await this.ormRepository.findOne({ where: { title } });

    return meet;
  }
}

export default MeetsRepository;
