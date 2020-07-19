import { Request, Response } from 'express';

import { container } from 'tsyringe';

import UserService from '@modules/users/services/UserService';

export default class UsersController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const userService = container.resolve(UserService);

    const user = await userService.getAll();
    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, participation } = request.body;

    const userService = container.resolve(UserService);

    const user = await userService.create({
      firstName,
      lastName,
      participation,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userService = container.resolve(UserService);

    const user = await userService.delete(id);

    return response.json(user);
  }
}
