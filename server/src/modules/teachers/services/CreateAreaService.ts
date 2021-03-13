import { injectable, inject } from 'tsyringe';

import IAreasRepository from '@modules/teachers/repositories/IAreasRepository';
import Area from '@modules/teachers/infra/typeorm/entities/Area';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  isTeacher: boolean;
}

@injectable()
class CreateAreaService {
  constructor(
    @inject('AreasRepository')
    private areasRepository: IAreasRepository,
  ) {}

  public async execute({ name, isTeacher }: IRequest): Promise<Area> {
    const checkAreaExists = await this.areasRepository.findByName(name);

    if (!isTeacher) {
      throw new AppError('Only teacher can create an area!', 401);
    }

    if (checkAreaExists) {
      throw new AppError('This area already exists!');
    }

    const area = await this.areasRepository.create({ name });

    return area;
  }
}

export default CreateAreaService;
