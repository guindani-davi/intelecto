/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Injectable } from '@nestjs/common';
import { IUsersRepository } from 'src/users/repository/i.users.repository';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { Database } from 'src/database/types';
import { DatabaseService } from 'src/database/service/database.service';

@Injectable()
export class UsersRepository implements IUsersRepository {
  private databaseService: DatabaseService;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  async createUser(
    dto: CreateUserDTO,
  ): Promise<Database['public']['Tables']['users']['Row'] | null> {
    const createdUser = await this.databaseService
      .from('users')
      .insert({
        email: dto.email,
        hashed_password: dto.hashedPassword,
        name: dto.name,
        surname: dto.surname,
      })
      .select()
      .single();

    if (createdUser.error) {
      return null;
    }

    return createdUser.data;
  }

  async getUserById(
    id: string,
  ): Promise<Database['public']['Tables']['users']['Row'] | null> {
    const returnedUser = await this.databaseService
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (returnedUser.error) {
      return null;
    }

    return returnedUser.data;
  }

  async getUserByEmail(
    email: string,
  ): Promise<Database['public']['Tables']['users']['Row'] | null> {
    const returnedUser = await this.databaseService
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (returnedUser.error) {
      return null;
    }

    return returnedUser.data;
  }
}
