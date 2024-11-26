import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'

import { Providers } from './providers'
import { ToastContainer } from 'react-toastify'
import { cn } from '@/lib/utils'
import { fontLogo, fontSans } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'Defense Access',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR" className="antialiased">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased dark:bg-zinc-900',
          fontSans.variable,
          fontLogo.variable,
        )}
      >
        <Providers>
          {children}
          <ToastContainer
            autoClose={1500}
            closeOnClick
            position="bottom-right"
            pauseOnFocusLoss
            icon={false}
            pauseOnHover
            theme="colored"
          />
        </Providers>
      </body>
    </html>
  )
}
