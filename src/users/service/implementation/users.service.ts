import { Injectable } from '@nestjs/common';
import { IUsersService } from 'src/users/service/i.users.service';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import {
  RequestGetUserByEmailDTO,
  RequestGetUserByIdDTO,
  ResponseGetUserDTO,
} from 'src/users/dtos/get-user.dto';
import { IUsersRepository } from 'src/users/repository/i.users.repository';

@Injectable()
export class UsersService implements IUsersService {
  private readonly usersRepository: IUsersRepository;

  public constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async createUser(data: CreateUserDTO): Promise<ResponseGetUserDTO | null> {
    const createdUser = await this.usersRepository.createUser(data);

    if (!createdUser) {
      return null;
    }

    const { createdAtDate, updatedAtDate } = this.parseDates(
      createdUser.created_at,
      createdUser.updated_at,
    );

    return new ResponseGetUserDTO(
      createdUser.id,
      createdUser.email,
      createdUser.name,
      createdUser.surname,
      createdAtDate,
      updatedAtDate,
    );
  }

  async getUserById(
    data: RequestGetUserByIdDTO,
  ): Promise<ResponseGetUserDTO | null> {
    const returnedUser = await this.usersRepository.getUserById(data.id);

    if (!returnedUser) {
      return null;
    }

    const { createdAtDate, updatedAtDate } = this.parseDates(
      returnedUser.created_at,
      returnedUser.updated_at,
    );

    return new ResponseGetUserDTO(
      returnedUser.id,
      returnedUser.email,
      returnedUser.name,
      returnedUser.surname,
      createdAtDate,
      updatedAtDate,
    );
  }

  async getUserByEmail(
    data: RequestGetUserByEmailDTO,
  ): Promise<ResponseGetUserDTO | null> {
    const returnedUser = await this.usersRepository.getUserByEmail(data.email);

    if (!returnedUser) {
      return null;
    }

    const { createdAtDate, updatedAtDate } = this.parseDates(
      returnedUser.created_at,
      returnedUser.updated_at,
    );

    return new ResponseGetUserDTO(
      returnedUser.id,
      returnedUser.email,
      returnedUser.name,
      returnedUser.surname,
      createdAtDate,
      updatedAtDate,
    );
  }

  private parseDates(
    createdAt: string,
    updatedAt: string | null,
  ): { createdAtDate: Date; updatedAtDate: Date | null } {
    const createdAtDate = new Date(createdAt);
    const updatedAtDate = updatedAt ? new Date(updatedAt) : null;
    return { createdAtDate, updatedAtDate };
  }
}
