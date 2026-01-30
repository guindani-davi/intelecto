import { Module } from '@nestjs/common';
import { IHelpersService } from 'src/helpers/service/i.helpers.service';
import { HelpersService } from 'src/helpers/service/implementation/helpers.service';

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
