import Area from '../infra/typeorm/entities/Area';

import ICreateAreaDTO from '../dtos/ICreateAreaDTO';

export default interface IAreasRepository {
  create(data: ICreateAreaDTO): Promise<Area>;
  save(user: Area): Promise<Area>;
  find(): Promise<Area[]>;
  findByName(name: string): Promise<Area | undefined>;
}
