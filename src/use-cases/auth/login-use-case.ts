import { IUserRepository } from '@/domain/repositories/user-repository';
import { UseCase } from '../use-case';
import { JwtService } from '@/services/implementations/jwt/jwt-service';
import { IBrcryptService } from '@/services/interfaces/bcrypt/interface';

interface LoginUseCaseInput {
  email: string;
  password: string;
}

interface LoginUseCaseOutput {
  token: string;
}

export class LoginUseCase
  implements UseCase<LoginUseCaseInput, LoginUseCaseOutput>
{
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly bcrypt: IBrcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
    const user = await this.userRepository.findByEmail(input.email);

    if (!user) throw new Error('User not found');

    const isValidPassword = await this.bcrypt.compare(
      input.password,
      user.password,
    );

    if (!isValidPassword) throw new Error('Invalid password');

    const token = this.jwtService.sign({ id: user.id });

    return { token };
  }
}
