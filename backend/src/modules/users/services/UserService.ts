import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErros';
import { IUser } from '../infra/mongodb/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

@injectable()
class UserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async getAll(): Promise<IUser[]> {
    const user = await this.usersRepository.find();

    return user;
  }

  async create({
    firstName,
    lastName,
    participation,
  }: ICreateUserDTO): Promise<IUser> {
    const user = await this.usersRepository.create({
      firstName,
      lastName,
      participation,
    });

    return user;
  }

  async delete(id: string): Promise<IUser> {
    const user = await this.usersRepository.delete(id);

    if (!user) {
      throw new AppError('Users not found.');
    }

    return user;
  }
}
export default UserService;
