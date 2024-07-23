import { IUserRepository } from '@/domain/repositories/user-repository';
import { UseCase } from '../use-case';

interface FindAllUsersUseCaseInput {}

interface FindAllUsersUseCaseOutput {
  id: string;
  name: string;
  email: string;
}

export class FindAllUsersUseCase
  implements UseCase<FindAllUsersUseCaseInput, FindAllUsersUseCaseOutput[]>
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<FindAllUsersUseCaseOutput[]> {
    const users = await this.userRepository.findAll();

    return users.map((user) => ({
      id: user.id.value,
      name: user.name,
      email: user.email,
    }));
  }
}
