import { createClient } from '@supabase/supabase-js';
// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://axvvmzbosvhqjslzkapk.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4dnZtemJvc3ZocWpzbHprYXBrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDMwODQzNywiZXhwIjoxOTk5ODg0NDM3fQ.KrNYfhHZ2kz0GOvD2tMhRXRDea1kcggukqrdHPe3Lok',
);
