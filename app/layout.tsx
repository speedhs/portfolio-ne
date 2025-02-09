import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Harsh Srivastava - Software Engineer",
  description: "Portfolio website of Harsh Srivastava, a Software Engineer specializing in full-stack development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}

