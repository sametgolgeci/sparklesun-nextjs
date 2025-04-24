import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  display: 'swap', 
  subsets: ['latin'], 
})

export const metadata = {
  title: 'Sparkle Sun LLC',
  description: 'Supplying high-quality marble and natural stones from Turkey to the North American market. Elegant, durable solutions for architecture, construction, and interior design.',
  keywords: ['marble supplier','Turkish marble','natural stone','granite','marble slabs','stone exporter','interior design materials','construction materials','premium marble California','marble for architecture','natural stone USA','Sparkle Sun LLC','Sparkle Sun','Sparkle Sunny','Sparkle Sunny LLC','Sparkle','Sparkle Sun marble','Sparkle Sun natural stone','Sparkle Sun USA','Sparkle Sun California','Sparkle Sun Turkish marble','Sparkle Sun granite','Sparkle Sun interior design','Sparkle Sun construction materials'],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'google-site-verification=uOnEzMOut8zdsqlkaHoPcAs7uqKr4KRlE6oM1wX4PaI', // Buraya Google’ın verdiği kodu ekle
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
