import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  display: 'swap', 
  subsets: ['latin'], 
})

export const metadata = {
  title: 'Sparkle Sun',
  description: 'Every vein tells a story',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
