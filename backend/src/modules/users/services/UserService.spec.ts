import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import UserService from '@modules/users/services/UserService';

describe('CreateUser', () => {
  it('Should be able to create a new appointment', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const userService = new UserService(fakeUsersRepository);

    const user = await userService.create({
      firstName: 'John',
      lastName: 'Nefi',
      participation: 1,
    });

    expect(user).toHaveProperty('_id');
  });
});
