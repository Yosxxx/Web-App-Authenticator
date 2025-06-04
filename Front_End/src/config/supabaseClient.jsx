import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://shnvomclnfgggkegqult.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNobnZvbWNsbmZnZ2drZWdxdWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjkyMTQsImV4cCI6MjA1NjA0NTIxNH0.fRIMeWDu-VghfhF_U53OD7zR6Al9hD3lo709H1yXQBs";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
