import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Update NEXT_PUBLIC_SITE_URL in Vercel to your final production URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://amaad.vercel.app'

const title = 'Amaad Ashraf Khan'
const description =
  "Portfolio of Amaad Ashraf Khan · Master's student in Mechatronics at FAU Erlangen-Nürnberg and Werkstudent Software Engineer at Siemens. Embedded systems, distributed systems, DevOps, and cloud-native infrastructure."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · Amaad Ashraf Khan',
  },
  description,
  keywords: [
    'Amaad Ashraf Khan',
    'Mechatronics',
    'FAU Erlangen-Nürnberg',
    'Siemens Mobility',
    'Embedded Systems',
    'Kubernetes',
    'k3s',
    'Edge Computing',
    'DevOps',
    'Cloud Native',
    'Software Engineer',
    'Werkstudent',
  ],
  authors: [{ name: 'Amaad Ashraf Khan' }],
  creator: 'Amaad Ashraf Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Amaad Ashraf Khan',
    title,
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Amaad Ashraf Khan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0d10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
