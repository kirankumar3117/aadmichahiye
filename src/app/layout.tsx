import type { Metadata } from 'next'
import '../../styles/main.scss'


export const metadata: Metadata = {
  title: 'Aadmichahiye',
  description: 'needed labour work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="main_layout">{children}</body>
    </html>
  )
}
