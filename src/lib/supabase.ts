
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Check if we're in development and variables are not set
if (import.meta.env.DEV && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
  console.warn('Supabase environment variables are not set. Using placeholder values for development.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  company?: string
  service_interest?: string
  message?: string
}

export async function submitContactForm(data: ContactSubmission) {
  // Check if we're using placeholder values
  if (supabaseUrl === 'https://your-project.supabase.co') {
    console.warn('Supabase is not properly configured. Form submission skipped.')
    // Return a mock success response for development
    return [{ id: 'mock-id', ...data, created_at: new Date().toISOString() }]
  }

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()

  if (error) {
    throw error
  }

  return result
}
