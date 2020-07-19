import { Router } from 'express';
import User from '../models/Users';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const users = await User.find();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const newUser = await User.create({ name: 'Teste' });

  return response.json(newUser);
});

export default usersRouter;
