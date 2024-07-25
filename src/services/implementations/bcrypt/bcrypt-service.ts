import { IBrcryptService } from '@/services/interfaces/bcrypt/interface';
import bcrypt from 'bcrypt';

export class BcryptService implements IBrcryptService {
  private readonly salt: number = 10;

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.salt);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
