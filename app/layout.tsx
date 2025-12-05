import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barn House в Брянске | rent32 - Уютный барнхаус для отдыха',
  description: 'Тёплый барнхаус в 10 минутах от Брянска. Тёплая купель, беседка, комфортный отдых. 10 000 ₽/сутки',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
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

