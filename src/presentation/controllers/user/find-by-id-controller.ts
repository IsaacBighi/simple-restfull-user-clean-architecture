import { FindUserByIdUseCase } from '@/use-cases/user/find-by-id-use-case';
import { Request, Response } from 'express';

export class FindUserByIdController {
  constructor(private readonly useCase: FindUserByIdUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.useCase.execute({ id });

      return res.status(200).json(user);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
