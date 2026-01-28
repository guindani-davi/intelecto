import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import {
  RequestGetUserByEmailDTO,
  RequestGetUserByIdDTO,
  ResponseGetUserDTO,
} from 'src/users/dtos/get-user.dto';

export abstract class IUsersService {
  abstract createUser(data: CreateUserDTO): Promise<ResponseGetUserDTO | null>;
  abstract getUserById(
    data: RequestGetUserByIdDTO,
  ): Promise<ResponseGetUserDTO | null>;
  abstract getUserByEmail(
    data: RequestGetUserByEmailDTO,
  ): Promise<ResponseGetUserDTO | null>;
}
