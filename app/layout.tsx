import SupabaseProvider from '@/components/providers/supabase-provider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LearnXAI',
  description: 'AI-Driven Interactive Learning Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}