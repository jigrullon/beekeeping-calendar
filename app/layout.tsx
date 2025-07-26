import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beekeeping Calendar',
  description: 'Your personalized beekeeping calendar with location-specific guidance for beekeepers in their first 0-3 years.',
  generator: 'v0.dev',
  icons: {
    icon: 'public/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
