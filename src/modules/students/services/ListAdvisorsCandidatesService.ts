import { injectable, inject } from 'tsyringe';

import ICandidatesRepository from '@modules/students/repositories/ICandidatesRepository';

import Candidate from '../infra/typeorm/entities/Candidate';

@injectable()
class ListAdvisorsCandidatesService {
  constructor(
    @inject('candidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute(): Promise<Candidate[]> {
    const users = await this.candidatesRepository.find();

    return users;
  }
}

export default ListAdvisorsCandidatesService;
