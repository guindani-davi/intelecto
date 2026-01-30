import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IHelpersService } from '../i.helpers.service';

@Injectable()
export class HelpersService extends IHelpersService {
  private readonly configService: ConfigService;

  public constructor(configService: ConfigService) {
    super();
    this.configService = configService;
  }

  public parseEntitiesDates(
    createdAt: string,
    updatedAt: string | null,
  ): { createdAtDate: Date; updatedAtDate: Date | null } {
    const createdAtDate = new Date(createdAt);
    const updatedAtDate = updatedAt ? new Date(updatedAt) : null;

    return { createdAtDate, updatedAtDate };
  }

  public isProduction(): boolean {
    const nodeEnv = this.configService.get<string>('NODE_ENV');
    return nodeEnv === 'production';
  }
}
