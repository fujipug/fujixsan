import type { Metadata } from 'next'
import { Unica_One } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import { IsClientCtxProvider } from '@/utils/is-client-ctx'

const unicaOne = Unica_One({ subsets: ['latin'], weight: '400' })

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
      <body className={unicaOne.className}>
        <Navbar />
        <IsClientCtxProvider>
          {children}
        </IsClientCtxProvider>
      </body>
    </html>
  )
}
