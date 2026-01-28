/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { Database } from 'src/database/types';

export abstract class IUsersRepository {
  abstract createUser(
    data: CreateUserDTO,
  ): Promise<Database['public']['Tables']['users']['Row'] | null>;
  abstract getUserById(
    id: string,
  ): Promise<Database['public']['Tables']['users']['Row'] | null>;
  abstract getUserByEmail(
    email: string,
  ): Promise<Database['public']['Tables']['users']['Row'] | null>;
}
