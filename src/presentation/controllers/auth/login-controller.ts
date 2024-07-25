import { LoginUseCase } from '@/use-cases/auth/login-use-case';
import { Request, Response } from 'express';

export class LoginController {
  constructor(private readonly useCase: LoginUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const user = await this.useCase.execute({ email, password });

      res.cookie('token', user.token, {
        httpOnly: true,
        maxAge: 3600000,
      });

      return res.status(200).json({ token: user.token });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
