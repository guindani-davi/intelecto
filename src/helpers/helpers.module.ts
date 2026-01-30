import { Module } from '@nestjs/common';
import { HelpersService } from 'src/helpers/service/implementation/helpers.service';
import { IHelpersService } from 'src/helpers/service/i.helpers.service';

@Module({
  exports: [IHelpersService],
  providers: [
    {
      provide: IHelpersService,
      useClass: HelpersService,
    },
  ],
})
export class HelpersModule {}
