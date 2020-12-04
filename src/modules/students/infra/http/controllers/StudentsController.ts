import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListStudentsService from '@modules/students/services/ListStudentsService';

export default class StudentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listStudentsService = container.resolve(ListStudentsService);

    const students = await listStudentsService.execute();

    return response.json(students);
  }
}
