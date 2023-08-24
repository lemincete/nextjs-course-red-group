import '@/src/styles/globals.scss'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'


const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Cars-catalog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={titilliumWeb.className}>
        {children}
      </body>
    </html>
  )
}
