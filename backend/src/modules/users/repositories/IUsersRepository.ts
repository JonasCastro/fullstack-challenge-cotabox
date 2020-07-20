import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { IUser } from '../infra/mongodb/entities/User';

export default interface IUsersRepository {
  delete(id: string): Promise<IUser | null>;
  find(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
}
