import { User } from '@/domain/entities/user';
import { IUserRepository } from '@/domain/repositories/user-repository';
import { PrismaClient } from '@prisma/client';

export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user ? User.create({ ...user }, user.id) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user ? User.create({ ...user }, user.id) : null;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => User.create({ ...user }, user.id));
  }

  async create(user: User): Promise<void> {
    const { id, name, email, password } = user;

    await this.prisma.user.create({
      data: {
        id: id.value,
        name,
        email,
        password,
      },
    });
  }

  async update(user: User): Promise<void> {
    const { id, name, email, password } = user;

    await this.prisma.user.update({
      where: { id: id.value },
      data: {
        name,
        email,
        password,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
