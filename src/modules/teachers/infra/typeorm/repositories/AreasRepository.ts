import { getRepository, Repository } from 'typeorm';

import ICreateAreaDTO from '@modules/teachers/dtos/ICreateAreaDTO';
import IAreasRepository from '@modules/teachers/repositories/IAreasRepository';

import Area from '../entities/Area';

class AreasRepository implements IAreasRepository {
  private ormRepository: Repository<Area>;

  constructor() {
    this.ormRepository = getRepository(Area);
  }

  public async create(data: ICreateAreaDTO): Promise<Area> {
    const area = this.ormRepository.create(data);

    await this.ormRepository.save(area);

    return area;
  }

  public async save(area: Area): Promise<Area> {
    await this.ormRepository.save(area);

    return area;
  }

  public async find(): Promise<Area[]> {
    const areas = await this.ormRepository.find();
    return areas;
  }

  public async findByName(name: string): Promise<Area | undefined> {
    const area = await this.ormRepository.findOne({ where: { name } });

    return area;
  }
}

export default AreasRepository;
