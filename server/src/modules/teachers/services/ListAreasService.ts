import { injectable, inject } from 'tsyringe';

import IAreasRepository from '@modules/teachers/repositories/IAreasRepository';

import Area from '../infra/typeorm/entities/Area';

@injectable()
class ListAreasService {
  constructor(
    @inject('AreasRepository')
    private areasRepository: IAreasRepository,
  ) {}

  public async execute(): Promise<Area[]> {
    const areas = await this.areasRepository.find();

    return areas;
  }
}

export default ListAreasService;
