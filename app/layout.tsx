import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
<<<<<<< HEAD
import "./globals.css"

export const metadata: Metadata = {
  title: "CodeGuard - Code Plagiarism Detector",
  description:
    "Detecting Code Similarity Made Simple - Advanced AI-powered plagiarism detection for Python, Java, C++, and more.",
=======
import { AuthProvider } from "@/contexts/auth-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Code Plagiarism Detector",
  description: "Professional plagiarism detection tool for educators",
>>>>>>> db_backend
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
=======
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AuthProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </AuthProvider>
>>>>>>> db_backend
        <Analytics />
      </body>
    </html>
  )
}
