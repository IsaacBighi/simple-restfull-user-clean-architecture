import { UpdateUserUseCase } from '@/use-cases/user/update-use-case';
import { Request, Response } from 'express';

export class UpdateUserController {
  constructor(private readonly useCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await this.useCase.execute({ id, name, email });

      return res.status(200).json(user);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
