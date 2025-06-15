
import { createClient } from '@supabase/supabase-js'

// Usar valores padrão para desenvolvimento
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDA5OTUyMDAsImV4cCI6MTk1NjU3MTIwMH0.placeholder'

// Verificar se estamos em desenvolvimento
const isDevelopment = import.meta.env.DEV
if (isDevelopment && supabaseUrl === 'https://placeholder.supabase.co') {
  console.log('Executando em modo de desenvolvimento sem Supabase configurado.')
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
  // Se estivermos usando valores placeholder, simular sucesso
  if (supabaseUrl === 'https://placeholder.supabase.co') {
    console.log('Simulando envio de formulário:', data)
    // Simular um pequeno delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    return [{ id: 'mock-' + Date.now(), ...data, created_at: new Date().toISOString() }]
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
