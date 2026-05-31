import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Modala Swathi',
  description: 'A passionate software developer crafting beautiful, accessible, and performant digital experiences. View my projects, skills, and get in touch.',
  keywords: ['software developer', 'web developer', 'full stack', 'react', 'next.js', 'portfolio'],
  authors: [{ name: 'Modala Swathi' }],
  creator: 'Modala Swathi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourname.dev',
    title: 'Modala Swathi',
    description: 'A passionate software developer crafting beautiful, accessible, and performant digital experiences.',
    siteName: 'Modala Swathi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modala Swathi | Software Developer',
    description: 'A passionate software developer crafting beautiful, accessible, and performant digital experiences.',
    creator: '@Modala Swathi',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
