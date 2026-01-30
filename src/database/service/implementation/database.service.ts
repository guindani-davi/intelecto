import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { IDatabaseService } from 'src/database/service/i.database.service';

@Injectable()
export class DatabaseService extends IDatabaseService {
  public constructor() {
    super(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_SECRET_KEY as string,
    );
  }
}
