import { getRepository, Repository } from 'typeorm';

import ICreateReportDTO from '@modules/advisors/dtos/ICreateReportDTO';
import IReportsRepository from '@modules/advisors/repositories/IReportsRepository';

import Report from '../entities/Report';

class ReportsRepository implements IReportsRepository {
  private ormRepository: Repository<Report>;

  constructor() {
    this.ormRepository = getRepository(Report);
  }

  public async create(data: ICreateReportDTO): Promise<Report> {
    const report = this.ormRepository.create(data);

    await this.ormRepository.save(report);

    return report;
  }

  public async save(report: Report): Promise<Report> {
    await this.ormRepository.save(report);

    return report;
  }
}

export default ReportsRepository;
