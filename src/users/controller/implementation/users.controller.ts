import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { IUsersController } from 'src/users/controller/i.users.controller';
import {
  RequestCreateUserDTO,
  ResponseCreateUserDTO,
} from 'src/users/dtos/create-user.dto';
import {
  RequestGetUserByEmailDTO,
  RequestGetUserByIdDTO,
  ResponseGetUserDTO,
} from 'src/users/dtos/get-user.dto';
import { IUsersService } from 'src/users/service/i.users.service';

@Controller('users')
export class UsersController implements IUsersController {
  private readonly userService: IUsersService;

  public constructor(userService: IUsersService) {
    this.userService = userService;
  }

  @Post()
  async createUser(
    @Body() body: RequestCreateUserDTO,
    @Res() response: Response<ResponseCreateUserDTO | Record<string, never>>,
  ): Promise<void> {
    const createdUser = await this.userService.createUser(body);

    if (!createdUser) {
      response.status(HttpStatus.CONFLICT).json({});
      return;
    }

    response.status(HttpStatus.CREATED).json(createdUser);
    return;
  }

  @Get('id/:id')
  async getUserById(
    @Param() params: RequestGetUserByIdDTO,
    @Res() response: Response<ResponseGetUserDTO | Record<string, never>>,
  ): Promise<void> {
    const returnedUser = await this.userService.getUserById(params);

    if (!returnedUser) {
      response.status(HttpStatus.NOT_FOUND).json({});
      return;
    }

    response.status(HttpStatus.OK).json(returnedUser);
    return;
  }

  @Get('email/:email')
  async getUserByEmail(
    @Param() params: RequestGetUserByEmailDTO,
    @Res() response: Response<ResponseGetUserDTO | Record<string, never>>,
  ): Promise<void> {
    const returnedUser = await this.userService.getUserByEmail(params);

    if (!returnedUser) {
      response.status(HttpStatus.NOT_FOUND).json({});
      return;
    }

    response.status(HttpStatus.OK).json(returnedUser);
    return;
  }
}
