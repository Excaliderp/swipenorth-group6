import { Inter } from '@next/font/google'
import './fonts'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" /*className={inter.className}*/>
      <body>{children}</body>
    </html>
  )
}
