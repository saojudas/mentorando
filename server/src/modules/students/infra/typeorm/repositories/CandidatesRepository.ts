import { getRepository, Repository } from 'typeorm';

import ICreateCandidateDTO from '@modules/students/dtos/ICreateCandidateDTO';
import ICandidatesRepository from '@modules/students/repositories/ICandidatesRepository';

import Candidate from '@modules/students/infra/typeorm/entities/Candidate';

class CandidatesRepository implements ICandidatesRepository {
  private ormRepository: Repository<Candidate>;

  constructor() {
    this.ormRepository = getRepository(Candidate);
  }

  public async create(data: ICreateCandidateDTO): Promise<Candidate> {
    const candidate = this.ormRepository.create(data);

    await this.ormRepository.save(candidate);

    return candidate;
  }

  public async save(candidate: Candidate): Promise<Candidate> {
    await this.ormRepository.save(candidate);

    return candidate;
  }

  public async find(): Promise<Candidate[]> {
    const candidates = await this.ormRepository.find({
      relations: [
        'teacher',
        'student',
        'teacher.user',
        'teacher.user.avatar',
        'teacher.user.area',
        'student.user',
        'student.user.avatar',
        'student.user.area',
      ],
    });

    return candidates;
  }

  public async findById(id: string): Promise<Candidate | undefined> {
    const candidate = await this.ormRepository.findOne(id, {
      relations: [
        'teacher',
        'student',
        'teacher.user',
        'teacher.user.avatar',
        'student.user',
        'student.user.avatar',
      ],
    });

    return candidate;
  }

  public async findByStudentId(
    student_id: string,
  ): Promise<Candidate | undefined> {
    const candidate = await this.ormRepository.findOne({
      relations: ['teacher', 'student'],
      where: { student_id },
    });

    return candidate;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default CandidatesRepository;
