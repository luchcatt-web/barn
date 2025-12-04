import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barn House - Аренда барнхауса',
  description: 'Тёплый барнхаус для выходных, которые помнишь',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

