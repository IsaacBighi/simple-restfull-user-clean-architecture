import jwt, { JwtPayload } from 'jsonwebtoken';

export interface IJwtService {
  sign(payload: object, options?: jwt.SignOptions): string;
  verify(token: string): Promise<JwtPayload | string>;
}
