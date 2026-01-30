import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from 'src/database/types';

export abstract class IDatabaseService extends SupabaseClient<Database> {}
