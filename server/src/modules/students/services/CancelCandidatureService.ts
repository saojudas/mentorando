import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICandidatesRepository from '@modules/students/repositories/ICandidatesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class CancelCandidatureService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found!');
    }

    const checkCandidateExists = await this.candidatesRepository.findByStudentId(
      user.student.id,
    );

    if (!checkCandidateExists) {
      throw new AppError('Candidate not found!', 404);
    }

    await this.candidatesRepository.delete(checkCandidateExists.id);
  }
}

export default CancelCandidatureService;
