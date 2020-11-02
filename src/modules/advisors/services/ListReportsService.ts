import { injectable, inject } from 'tsyringe';

import IReportsRepository from '@modules/advisors/repositories/IReportsRepository';

import Report from '@modules/advisors/infra/typeorm/entities/Report';

@injectable()
class ListReportsService {
  constructor(
    @inject('ReportsRepository')
    private reportsRepository: IReportsRepository,
  ) {}

  public async execute(): Promise<Report[]> {
    const reports = await this.reportsRepository.find();

    return reports;
  }
}

export default ListReportsService;
