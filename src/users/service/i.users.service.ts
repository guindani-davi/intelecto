import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { GetUserDTO } from 'src/users/dtos/get-user.dto';

export abstract class UserService {
  abstract createUser(data: CreateUserDTO): Promise<GetUserDTO | null>;
  abstract getUserById(id: string): Promise<GetUserDTO | null>;
  abstract getUserByEmail(email: string): Promise<GetUserDTO | null>;
}
