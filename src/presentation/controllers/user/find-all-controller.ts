import { FindAllUsersUseCase } from '@/use-cases/user/find-all-use-case';
import { Request, Response } from 'express';

export class FindAllUsersController {
  constructor(private readonly useCase: FindAllUsersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.useCase.execute();

      return res.status(200).json(users);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
