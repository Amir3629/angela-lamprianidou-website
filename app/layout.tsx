import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ConditionalFooter from "../components/ConditionalFooter"
import "./globals.css"

export const metadata: Metadata = {
  title: "Angela Lamprianidou Choreographer & Per4mer",
  description: "Angela Lamprianidou,Choreographer,Per4mer & Teacher,Berlin,Schöneberg",
  keywords:
    "lamprianidou.com,Angela Lamprianidou,lamprianidou,Per4mer,Berlin,Schöneberg,Dance as a social Movement,Raw Man Tick,Homemotion,Jaw Release,Gegen den Zeitgeist,From Now to Now,Tanz hin Tanz her,you are the point,you-are-the-point.de,appointment,appointment on stage,opa europa,sitz,SITz,alihop,tongue,el cuerpo del otro,sit,short cuts,back to emotion,katharsi,loop,time,art sit,once eyes",
  robots: "index, follow",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Suspense fallback={null}>{children}</Suspense>
        <ConditionalFooter />
        <Analytics />
      </body>
    </html>
  )
}
