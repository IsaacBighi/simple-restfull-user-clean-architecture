// middleware/authenticate-jwt-middleware.ts
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@/services/implementations/jwt/jwt-service';

const jwtService = new JwtService(process.env.JWT_SECRET as string);

export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const decoded = jwtService.verify(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
}
