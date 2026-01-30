import { CreateUserRepositoryDTO } from 'src/users/dtos/create-user.dto';
import { Database } from 'src/database/types';
import {
  RequestGetUserByEmailDTO,
  RequestGetUserByIdDTO,
} from 'src/users/dtos/get-user.dto';

export abstract class IUsersRepository {
  public abstract createUser(
    dto: CreateUserRepositoryDTO,
  ): Promise<Database['public']['Tables']['users']['Row'] | null>;
  public abstract getUserById(
    dto: RequestGetUserByIdDTO,
  ): Promise<Database['public']['Tables']['users']['Row'] | null>;
  public abstract getUserByEmail(
    dto: RequestGetUserByEmailDTO,
  ): Promise<Database['public']['Tables']['users']['Row'] | null>;
}
