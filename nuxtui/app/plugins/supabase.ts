import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseUrl = "https://klydieszikbabwffrkdt.supabase.co"
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtseWRpZXN6aWtiYWJ3ZmZya2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODEzOTgsImV4cCI6MjA0MzQ1NzM5OH0.WFZpS0bkJUtV4RIRp_AFpdO04VER2DeJUyV0B7qsXpg"

<<<<<<< Updated upstream
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
=======
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
  },
})
>>>>>>> Stashed changes

export default defineNuxtPlugin(() => {
  return {
    provide: {
      supabase,
    },
  }
})
