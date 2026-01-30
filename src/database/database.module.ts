import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/database/service/implementation/database.service';
import { IDatabaseService } from 'src/database/service/i.database.service';

@Module({
  exports: [IDatabaseService],
  providers: [
    {
      provide: IDatabaseService,
      useClass: DatabaseService,
    },
  ],
})
export class DatabaseModule {}
