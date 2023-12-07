import type { Metadata } from 'next'
import { Swanky_and_Moo_Moo } from 'next/font/google'
import './globals.css'

const swanky = Swanky_and_Moo_Moo({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Fujixsan',
  description: 'Official site for everything Fujixsan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={swanky.className}>{children}</body>
    </html>
  )
}
