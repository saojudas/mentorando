import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IMeetsRepository from '@modules/meet/repositories/IMeetsRepository';

interface IRequest {
  meet_id: string;
}

@injectable()
class CancelMeetService {
  constructor(
    @inject('MeetsRepository')
    private meetsRepository: IMeetsRepository,
  ) {}

  public async execute({ meet_id }: IRequest): Promise<void> {
    const meet = await this.meetsRepository.findById(meet_id);

    if (!meet) {
      throw new AppError('Meet not found!');
    }

    await this.meetsRepository.delete(meet_id);
  }
}

export default CancelMeetService;
