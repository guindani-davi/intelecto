import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from 'src/users/controller/users.controller';
import { UsersRepository } from 'src/users/repository/implementation/users.repository';
import { IUsersRepository } from 'src/users/repository/i.users.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: IUsersRepository,
      useClass: UsersRepository,
    },
  ],
  controllers: [UsersController],
  exports: [],
})
export class UsersModule {}
