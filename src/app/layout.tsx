import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const font = Inter({subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'amar jay',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
