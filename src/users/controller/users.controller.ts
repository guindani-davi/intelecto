import { Controller, Get, Param, Res, HttpStatus, Post } from '@nestjs/common';
import { IUsersService } from 'src/users/service/i.users.service';
import {
  RequestGetUserByEmailDTO,
  RequestGetUserByIdDTO,
  ResponseGetUserDTO,
} from '../dtos/get-user.dto';
import type { Response } from 'express';

@Controller('users')
export class UsersController {
  private readonly userService: IUsersService;

  public constructor(userService: IUsersService) {
    this.userService = userService;
  }

  @Post()
  async createUser(@Body() createUserDt: Response): Promise<void> {
    // Implementation for creating a user would go here
    res.status(HttpStatus.NOT_IMPLEMENTED).send();
    return;
  }

  @Get(':id')
  async getUserById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<void> {
    const data = new RequestGetUserByIdDTO(id);
    const returnedUser = await this.userService.getUserById(data);

    if (!returnedUser) {
      res.status(HttpStatus.NOT_FOUND).send();
      return;
    }

    const responseDto = new ResponseGetUserDTO(
      returnedUser.id,
      returnedUser.email,
      returnedUser.name,
      returnedUser.surname,
      returnedUser.createdAt,
      returnedUser.updatedAt,
    );

    res.status(HttpStatus.OK).json(responseDto);
    return;
  }

  @Get(':email')
  async getUserByEmail(
    @Param('email') email: string,
    @Res() res: Response,
  ): Promise<void> {
    const data = new RequestGetUserByEmailDTO(email);
    const returnedUser = await this.userService.getUserByEmail(data);

    if (!returnedUser) {
      res.status(HttpStatus.NOT_FOUND).send();
      return;
    }

    const responseDto = new ResponseGetUserDTO(
      returnedUser.id,
      returnedUser.email,
      returnedUser.name,
      returnedUser.surname,
      returnedUser.createdAt,
      returnedUser.updatedAt,
    );

    res.status(HttpStatus.OK).json(responseDto);
    return;
  }
}
