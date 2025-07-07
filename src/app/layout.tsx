import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {PERSONALINFO_DATA} from '@/data/personalInfo';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PERSONALINFO_DATA.name} - ${PERSONALINFO_DATA.role}`,
  description: PERSONALINFO_DATA.bio,
  keywords: [
    'full stack developer',
    'react developer',
    'react native developer',
    'mobile app developer',
    'frontend developer',
    'backend developer',
    'node.js developer',
    'next.js developer',
    'javascript developer',
    'typescript developer',
    'web developer',
    'software engineer',
    PERSONALINFO_DATA.name.toLowerCase().replace(' ', '-')
  ],
  authors: [{name: PERSONALINFO_DATA.name}],
  creator: PERSONALINFO_DATA.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // url: 'https://yourwebsite.com',
    siteName: `${PERSONALINFO_DATA.name} Portfolio`,
    title: `${PERSONALINFO_DATA.name} - ${PERSONALINFO_DATA.role}`,
    description: PERSONALINFO_DATA.bio,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${PERSONALINFO_DATA.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONALINFO_DATA.name} - ${PERSONALINFO_DATA.role}`,
    description: PERSONALINFO_DATA.bio,
    // creator: '@alexjohnson',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
