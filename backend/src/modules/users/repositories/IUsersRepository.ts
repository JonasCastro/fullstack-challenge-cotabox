import { IUser } from '../infra/mongodb/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  delete(id: string): Promise<IUser | null>;
  find(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
}
