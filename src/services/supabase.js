// Supabase
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://utpvgdnkurfdkvwjtpwk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cHZnZG5rdXJmZGt2d2p0cHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MDk4NzUsImV4cCI6MjAyMDQ4NTg3NX0.uUHhY55AddTM0yko57FoLRvOyLuUGQ37rtJp54q-LHo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
