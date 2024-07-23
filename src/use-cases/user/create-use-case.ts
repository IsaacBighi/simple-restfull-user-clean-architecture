import { IUserRepository } from '@/domain/repositories/user-repository';
import { UseCase } from '../use-case';
import { User } from '@/domain/entities/user';

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
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    input: CreateUserUseCaseInput,
  ): Promise<CreateUserUseCaseOuput> {
    const user = User.create(input);
    await this.userRepository.create(user);

    return {
      id: user.id.value,
    };
  }
}
