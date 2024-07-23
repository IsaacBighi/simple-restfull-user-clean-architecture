import { IpasswordHasher } from '@/services/interfaces/password-hasher/interface';
import bcrypt from 'bcrypt';

export class BcryptPasswordHasher implements IpasswordHasher {
  private readonly salt: number = 10;

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.salt);
  }
}
