
/* 
Layout component defines a shared and consistent structure accross pages in the application. 
It's a good place to add shared components like navbar, footer, headers, sidebars that should be present across multiple views.

Purpose: 
#1 Consistency
#2 Reusability
#3 Maintainability -> changes in shared components only need to be introduced once

*/
import '../styles/globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dev.care',
  description: 'from Switerland with love'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}