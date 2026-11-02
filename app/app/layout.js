export const metadata = {
  title: 'AI Mongol Duu Studio',
  description: 'AI дуу үүсгэх болон вокал салгах үйлчилгээ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a' }}>
        {children}
      </body>
    </html>
  )
}
