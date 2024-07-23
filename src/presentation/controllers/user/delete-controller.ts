import { DeleteUserUseCase } from '@/use-cases/user/delete-use-case';
import { Request, Response } from 'express';

export class DeleteUserController {
  constructor(private readonly useCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.useCase.execute({ id });

      return res.status(204).send({
        message: 'User deleted successfully',
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
