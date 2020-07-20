import { Types } from 'mongoose';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User, { IUser } from '../../infra/mongodb/entities/User';

class UsersRepository implements IUsersRepository {
  private users: IUser[] = [];

  public async find(): Promise<IUser[]> {
    return this.users;
  }

  public async create(userData: ICreateUserDTO): Promise<IUser> {
    const user = new User();
    const id = Types.ObjectId();
    Object.assign(user, { id, ...userData });
    this.users.push(user);

    return user;
  }

  public async delete(id: string): Promise<IUser | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }

    const indexUser = this.users.findIndex(user => user.id === id);

    if (indexUser === -1) return null;

    const user = this.users[indexUser];

    this.users.splice(indexUser, 1);

    return user;
  }
}

export default UsersRepository;
