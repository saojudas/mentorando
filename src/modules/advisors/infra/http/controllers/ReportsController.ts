import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateReportService from '@modules/advisors/services/CreateReportService';
import ListReportsService from '@modules/advisors/services/ListReportsService';

export default class ReportsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listReportsService = container.resolve(ListReportsService);

    const reports = await listReportsService.execute();

    return response.json(reports);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      students_ids,
      subject_matter,
      report_date,
      start_hour,
      end_hour,
    } = request.body;
    const { id } = request.user;

    const createReportService = container.resolve(CreateReportService);

    const report = await createReportService.execute({
      students_ids,
      subject_matter,
      report_date,
      start_hour,
      end_hour,
      user_id: id,
    });

    return response.status(201).json(report);
  }
}
