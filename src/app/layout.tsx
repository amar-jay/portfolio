import type { Metadata } from 'next'
import { McLaren } from 'next/font/google'
import './global.css'

const font = McLaren({weight: '400', subsets: ['latin'] })

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
