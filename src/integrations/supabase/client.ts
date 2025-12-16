import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://frqmnavgozahhtpvaqty.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_SwpoRn54GF4iowoYtR8sDQ_xvxDqm6x";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
