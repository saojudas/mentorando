import Report from '../infra/typeorm/entities/Report';

import ICreateReportDTO from '../dtos/ICreateReportDTO';

export default interface IReportsRepository {
  create(data: ICreateReportDTO): Promise<Report>;
  save(meet: Report): Promise<Report>;
}
