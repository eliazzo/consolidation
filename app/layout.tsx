import './globals.css'
import type { Metadata } from 'next'
import { Inter, Bitter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Azzopardi',
  description: 'Created by Elisabeth Azzopardiß',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="flex-col items-center h-200 mx-10 font-mono">
        {children
        }
        </div>
        </body>
    </html>
  )
}
