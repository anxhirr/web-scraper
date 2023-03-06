import '../styles/globals.css'

export const metadata = {
  title: 'Web Scraper',
  description: 'Scapes the web for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
