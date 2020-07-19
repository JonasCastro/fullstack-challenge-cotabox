import { Router } from 'express';

import UsersController from '../controllers/UsersController';

import CreateUserValidators from '../validators/CreateUserValidators';
import DeleteUserValidators from '../validators/DeleteUserValidators';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', usersController.getAll);
usersRouter.post('/', CreateUserValidators, usersController.create);
usersRouter.delete('/:id', DeleteUserValidators, usersController.delete);

export default usersRouter;
