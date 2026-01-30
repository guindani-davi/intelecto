import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDatabaseService } from 'src/database/service/i.database.service';

@Injectable()
export class DatabaseService extends IDatabaseService {
  public constructor(configService: ConfigService) {
    super(
      configService.getOrThrow<string>('SUPABASE_URL'),
      configService.getOrThrow<string>('SUPABASE_SECRET_KEY'),
    );
  }
}
