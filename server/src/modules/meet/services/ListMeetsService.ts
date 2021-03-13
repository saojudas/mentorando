import { injectable, inject } from 'tsyringe';

import IMeetsRepository from '@modules/meet/repositories/IMeetsRepository';

import Meet from '../infra/typeorm/entities/Meet';

@injectable()
class ListMeetsService {
  constructor(
    @inject('MeetsRepository')
    private meetsRepository: IMeetsRepository,
  ) {}

  public async execute(): Promise<Meet[]> {
    const meet = await this.meetsRepository.find();

    return meet;
  }
}

export default ListMeetsService;
