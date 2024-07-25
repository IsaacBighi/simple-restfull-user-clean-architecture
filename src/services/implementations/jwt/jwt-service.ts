import { IJwtService } from '@/services/interfaces/jwt/interface';
import jwt, { JwtPayload } from 'jsonwebtoken';

export class JwtService implements IJwtService {
  constructor(private readonly secret: string) {}

  sign(payload: object, options?: jwt.SignOptions): string {
    return jwt.sign(payload, this.secret, options);
  }

  async verify(token: string): Promise<string | JwtPayload> {
    return jwt.verify(token, this.secret);
  }
}
