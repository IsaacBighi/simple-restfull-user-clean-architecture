// routes/auth-routes.ts
import { prisma } from '@/config/prisma/prisma';
import { LoginController } from '@/presentation/controllers/auth/login-controller';
import { authenticateJWT } from '@/presentation/middleware/authenticate-jwt-middleware';
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { BcryptService } from '@/services/implementations/bcrypt/bcrypt-service';
import { JwtService } from '@/services/implementations/jwt/jwt-service';
import { LoginUseCase } from '@/use-cases/auth/login-use-case';
import { Router } from 'express';

const authRoute = Router();

//repository
const userRepository = new PrismaUserRepository(prisma);

//service
const bcryptService = new BcryptService();
const jwtService = new JwtService(process.env.JWT_SECRET as string);

//use-case
const loginUseCase = new LoginUseCase(
  userRepository,
  bcryptService,
  jwtService,
);

//controller
const loginController = new LoginController(loginUseCase);

authRoute.post('/login', (req, res) => loginController.handle(req, res));

//protected route
authRoute.get('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

authRoute.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.send('Logout successful');
});

export { authRoute };
