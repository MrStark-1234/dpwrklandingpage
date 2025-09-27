import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface EmailRecord {
  id?: string
  email: string
  created_at?: string
  downloaded_at?: string
}

export async function saveEmail(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('email_signups')
      .insert([
        { 
          email,
          downloaded_at: new Date().toISOString()
        }
      ])
    
    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }
    
    return { success: true }
  } catch (error) {
    console.error('Error saving email:', error)
    return { success: false, error: 'Failed to save email' }
  }
}