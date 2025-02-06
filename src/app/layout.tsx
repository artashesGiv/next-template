import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './layout.scss'
import '../../styles/index.scss'
import Link from 'next/link'

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
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
      <body className={`${nunitoSans.variable}`}>
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
