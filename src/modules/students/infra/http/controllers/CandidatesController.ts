import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CandidateAdvisorService from '@modules/students/services/CandidateAdvisorService';
import CancelCandidatureService from '@modules/students/services/CancelCandidatureService';
import ListAdvisorsCandidatesService from '@modules/students/services/ListAdvisorsCandidatesService';

export default class CandidatesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAdvisorsCandidatesService = container.resolve(
      ListAdvisorsCandidatesService,
    );

    const candidates = await listAdvisorsCandidatesService.execute();

    return response.json(candidates);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const candidateAdvisorService = container.resolve(CandidateAdvisorService);

    const candidate = await candidateAdvisorService.execute({ user_id: id });

    return response.json(candidate);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const cancelCandidatureService = container.resolve(
      CancelCandidatureService,
    );

    await cancelCandidatureService.execute({ user_id: id });

    return response.send();
  }
}
