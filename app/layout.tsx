import type React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { ParticlesBackground } from '@/components/particles-background'
import { Loader } from '@/components/loader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Ansh Shah | Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  icons: {
    icon: '/anshlogo.png'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="icon" href="/anshlogo.png" sizes="any" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {/* <Loader /> */}
          <div className='relative min-h-screen'>
            <ParticlesBackground />
            <Navbar />
            <main className='relative z-10'>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
export const dynamic = 'force-dynamic'
export const dynamicParams = false
export const revalidate = 0
