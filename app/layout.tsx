import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full-Stack Interview - Coding Challenge',
  description: 'Test your full-stack development skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Full-Stack Developer Interview</h1>
            <p className="text-blue-100">Complete the coding challenges below</p>
          </div>
        </header>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Full-Stack Interview Challenge</p>
        </footer>
      </body>
    </html>
  )
}