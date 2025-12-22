export const metadata = {
  title: 'Mythosblock Gateway',
  description: 'Eternum369 Signal Monitor',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: 'black', color: 'white', fontFamily: 'sans-serif' }}>{children}</body>
    </html>
  )
}
