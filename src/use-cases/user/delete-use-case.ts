import { IUserRepository } from '@/domain/repositories/user-repository';
import { UseCase } from '../use-case';

interface DeleteUserUseCaseInput {
  id: string;
}

interface DeleteUserUseCaseOutput {
  id: string;
}

export class DeleteUserUseCase
  implements UseCase<DeleteUserUseCaseInput, DeleteUserUseCaseOutput>
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({
    id,
  }: DeleteUserUseCaseInput): Promise<DeleteUserUseCaseOutput> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new Error('User not found');

    await this.userRepository.delete(id);

    return {
      id: user.id.value,
    };
  }
}
