import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { HelpersModule } from 'src/helpers/helpers.module';
import { UsersController } from 'src/users/controller/implementation/users.controller';
import { IUsersRepository } from 'src/users/repository/i.users.repository';
import { UsersRepository } from 'src/users/repository/implementation/users.repository';
import { IUsersService } from 'src/users/service/i.users.service';
import { UsersService } from 'src/users/service/implementation/users.service';

@Module({
  controllers: [UsersController],
  exports: [],
  imports: [DatabaseModule, HelpersModule],
  providers: [
    {
      provide: IUsersRepository,
      useClass: UsersRepository,
    },
    {
      provide: IUsersService,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
