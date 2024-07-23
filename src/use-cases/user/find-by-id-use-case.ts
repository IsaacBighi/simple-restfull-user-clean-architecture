import { IUserRepository } from '@/domain/repositories/user-repository';
import { UseCase } from '../use-case';

interface FindUserByIdUseCaseInput {
  id: string;
}

interface FindUserByIdUseCaseOutput {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class FindUserByIdUseCase
  implements UseCase<FindUserByIdUseCaseInput, FindUserByIdUseCaseOutput>
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({
    id,
  }: FindUserByIdUseCaseInput): Promise<FindUserByIdUseCaseOutput> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new Error('User not found');

    return {
      id: user.id.value,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
}
