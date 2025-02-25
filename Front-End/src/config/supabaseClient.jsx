import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dijlyvtthsawxraudkua.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpamx5dnR0aHNhd3hyYXVka3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjUxNjEsImV4cCI6MjA1NjA0MTE2MX0.Ccr_95zRGxO6vnUESkCPLvQVdNn_DngjP8Y1wNk91oE";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
