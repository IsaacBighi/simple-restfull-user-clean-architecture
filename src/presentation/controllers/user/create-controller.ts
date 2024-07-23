import { CreateUserUseCase } from '@/use-cases/user/create-use-case';
import { Request, Response } from 'express';

export class CreateUserController {
  constructor(private readonly useCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      const user = await this.useCase.execute({ name, email, password });

      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
