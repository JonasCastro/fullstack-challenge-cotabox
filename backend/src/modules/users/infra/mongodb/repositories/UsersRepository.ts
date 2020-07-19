import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User, { IUser } from '../entities/User';

import IUsersRepository from '../../../repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  public async find(): Promise<IUser[]> {
    const user = await User.find();

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<IUser> {
    const user = await User.create(userData);

    return user;
  }

  public async delete(id: string): Promise<IUser | null> {
    const user = await User.findByIdAndDelete(id);

    return user;
  }
}

export default UsersRepository;
