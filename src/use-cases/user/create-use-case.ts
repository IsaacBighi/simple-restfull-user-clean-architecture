import { IUserRepository } from '@/domain/repositories/user-repository';
import { UseCase } from '../use-case';
import { User } from '@/domain/entities/user';
import { IpasswordHasher } from '@/services/interfaces/password-hasher/interface';

interface CreateUserUseCaseInput {
  name: string;
  email: string;
  password: string;
}

interface CreateUserUseCaseOuput {
  id: string;
}

export class CreateUserUseCase
  implements UseCase<CreateUserUseCaseInput, CreateUserUseCaseOuput>
{
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly bcrypt: IpasswordHasher,
  ) {}

  async execute(
    input: CreateUserUseCaseInput,
  ): Promise<CreateUserUseCaseOuput> {
    const hashedPassword = await this.bcrypt.hash(input.password);

    const user = User.create({
      ...input,
      password: hashedPassword,
    });

    await this.userRepository.create(user);

    return {
      id: user.id.value,
    };
  }
}
