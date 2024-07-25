import { Router } from 'express';
import { prisma } from '@/config/prisma/prisma';
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
//find
import { FindUserByIdUseCase } from '@/use-cases/user/find-by-id-use-case';
import { FindUserByIdController } from '@/presentation/controllers/user/find-by-id-controller';
//find-all
import { FindAllUsersUseCase } from '@/use-cases/user/find-all-use-case';
import { FindAllUsersController } from '@/presentation/controllers/user/find-all-controller';
//create
import { CreateUserUseCase } from '@/use-cases/user/create-use-case';
import { CreateUserController } from '@/presentation/controllers/user/create-controller';
//update
import { UpdateUserUseCase } from '@/use-cases/user/update-use-case';
import { UpdateUserController } from '@/presentation/controllers/user/update-controller';
//delelte
import { DeleteUserUseCase } from '@/use-cases/user/delete-use-case';
import { DeleteUserController } from '@/presentation/controllers/user/delete-controller';

//services
import { BcryptService } from '@/services/implementations/bcrypt/bcrypt-service';

const userRoute = Router();
const userRepository = new PrismaUserRepository(prisma);

//find-id
const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);
userRoute.get('/users/:id', (req, res) =>
  findUserByIdController.handle(req, res),
);

//find-all
const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);
userRoute.get('/users', (req, res) => findAllUsersController.handle(req, res));

//create
const createUserUseCase = new CreateUserUseCase(
  userRepository,
  new BcryptService(),
);
const createUserController = new CreateUserController(createUserUseCase);
userRoute.post('/users', (req, res) => createUserController.handle(req, res));

//update
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);
userRoute.put('/users/:id', (req, res) =>
  updateUserController.handle(req, res),
);

//delete
const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);
userRoute.delete('/users/:id', (req, res) =>
  deleteUserController.handle(req, res),
);

export { userRoute };
