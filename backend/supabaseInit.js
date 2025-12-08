import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://lxzxhtxnauclynhayhht.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4enhodHhuYXVjbHluaGF5aGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTc3MzcsImV4cCI6MjA3OTYzMzczN30.055aw73w3dvCedIaT9Wtgb39pSqWn5FnjVhF1k_RO6E"
);
export default supabase;
