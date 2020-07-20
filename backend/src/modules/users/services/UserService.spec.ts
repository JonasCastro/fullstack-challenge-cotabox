import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import { Types } from 'mongoose';
import UserService from '@modules/users/services/UserService';

import AppError from '@shared/errors/AppErros';

let fakeUsersRepository: FakeUsersRepository;
let userService: UserService;

describe('User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    userService = new UserService(fakeUsersRepository);
  });

  it('should be able to list the users', async () => {
    const user = await userService.create({
      firstName: 'John',
      lastName: 'Nefi',
      participation: 1,
    });

    const users = await userService.getAll();

    expect(users).toEqual(expect.arrayContaining([user]));
  });

  it('Should be able to create a new user', async () => {
    const user = await userService.create({
      firstName: 'John',
      lastName: 'Nefi',
      participation: 1,
    });

    expect(user).toHaveProperty('_id');
    expect({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      participation: user.participation,
    }).toEqual({
      _id: user._id,
      firstName: 'John',
      lastName: 'Nefi',
      participation: '1',
    });
  });

  it('Should be able to delete the user', async () => {
    const newUser = await userService.create({
      firstName: 'John',
      lastName: 'Nefi',
      participation: 1,
    });

    await userService.delete(newUser._id);

    const users = await userService.getAll();

    const userSearch = users.find(user => user.id === newUser.id);

    expect(userSearch).toBe(undefined);
  });

  it('should not be able to delete a user that does not exist', async () => {
    const id = Types.ObjectId();

    await expect(userService.delete(id.toHexString())).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
