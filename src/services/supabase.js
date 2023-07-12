import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wgbktafvgckurcrqlnke.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYmt0YWZ2Z2NrdXJjcnFsbmtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5Nzg4ODcsImV4cCI6MjAwNDU1NDg4N30.TowywutJ_4wyfGvMSEQaDOM_hHPB5IUh5tDOI0CJo6s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
