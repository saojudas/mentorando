import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ApproveAdvisorService from '@modules/teachers/services/ApproveAdvisorService';

export default class AreasController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { student_id } = request.body;
    const { id: teacher_id } = request.user;

    const approveAdvisorService = container.resolve(ApproveAdvisorService);

    await approveAdvisorService.execute({
      student_id,
      teacher_id,
    });

    return response.send();
  }
}
