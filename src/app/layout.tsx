import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './layout.scss'
import '../../styles/index.scss'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'METEO',
  description: 'METEO FRONTEND',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='menu'>
          <Link href='/'>Home</Link>
          <Link href='/auth'>Auth</Link>
          <Link href='/profile'>Profile</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
