import { IUserRepository } from '@/domain/repositories/user-repository';
import { UseCase } from '../use-case';

interface UpdateUserUseCaseInput {
  id: string;
  name?: string;
  email?: string;
}

interface UpdateUserUseCaseOutput {
  id: string;
  name: string;
  email: string;
}

export class UpdateUserUseCase
  implements UseCase<UpdateUserUseCaseInput, UpdateUserUseCaseOutput>
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    input: UpdateUserUseCaseInput,
  ): Promise<UpdateUserUseCaseOutput> {
    const user = await this.userRepository.findById(input.id);

    if (!user) throw new Error('User not found');

    if (input.name) {
      user.changeName(input.name);
    }

    if (input.email) {
      user.changeEmail(input.email);
    }

    await this.userRepository.update(user);

    return {
      id: user.id.value,
      name: user.name,
      email: user.email,
    };
  }
}
