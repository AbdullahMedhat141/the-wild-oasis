import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zjlskfqmjgzmlpevkabz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbHNrZnFtamd6bWxwZXZrYWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MDUzOTQsImV4cCI6MjAzOTk4MTM5NH0.nue4Lh6j4uBztWclYb2PnIh26EbaCr2zRA9ga_4AUgo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
