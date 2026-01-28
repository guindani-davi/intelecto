import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/service/i.users.service';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { GetUserDTO } from 'src/users/dtos/get-user.dto';
import { IUsersRepository } from 'src/users/repository/i.users.repository';

@Injectable()
export class UsersService implements UserService {
  private readonly usersRepository: IUsersRepository;

  public constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async createUser(data: CreateUserDTO): Promise<GetUserDTO | null> {
    const createdUser = await this.usersRepository.createUser(data);

    if (!createdUser) {
      return null;
    }

    const { createdAtDate, updatedAtDate } = this.parseDates(
      createdUser.created_at,
      createdUser.updated_at
    );

    return new GetUserDTO(
      createdUser.id,
      createdUser.email,
      createdUser.name,
      createdUser.surname,
      createdAtDate,
      updatedAtDate
    );
  }
  getUserById(id: string): Promise<GetUserDTO | null> {
    throw new Error('Method not implemented.');
  }
  getUserByEmail(email: string): Promise<GetUserDTO | null> {
    throw new Error('Method not implemented.');
  }

  private parseDates(createdAt: string, updatedAt: string | null): { createdAtDate: Date; updatedAtDate: Date | null } {
    const createdAtDate = new Date(createdAt);
    const updatedAtDate = updatedAt ? new Date(updatedAt) : null;
    return { createdAtDate, updatedAtDate };
  }
}
