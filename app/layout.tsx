import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Micron Plus | Industrial Minerals & Chemical Solutions",
  description:
    "High-quality B2B supplier of Ground Calcium Carbonate, Talc, and Limestone for industrial applications worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
