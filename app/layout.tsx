import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ConditionalFooter from "../components/ConditionalFooter"
import "./globals.css"
import "../styles/jana-vrana-design.css"

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
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
                   #masonry-container {
                     padding-left: 0px !important;
                     padding-right: 0px !important;
                     box-sizing: border-box !important;
                     margin-left: 1px !important;
                     width: 100% !important;
                     max-width: none !important;
                   }
                   .itemList {
                     padding-left: 0px !important;
                     padding-right: 0px !important;
                     box-sizing: border-box !important;
                     margin-left: 1px !important;
                     width: 100% !important;
                     max-width: none !important;
                   }
                   .homepage-links {
                     padding-left: 0px !important;
                     padding-right: 0px !important;
                     box-sizing: border-box !important;
                     margin-left: 1px !important;
                     width: 100% !important;
                     max-width: none !important;
                   }
            .item {
              width: 228px !important;
              max-width: 228px !important;
              padding: 0 !important;
              border: 1px solid #000000 !important;
            }
            .item.item-showcase {
              width: 228px !important;
              max-width: 228px !important;
              padding: 0 !important;
              border: 1px solid #000000 !important;
            }
            body .item {
              width: 228px !important;
              max-width: 228px !important;
              padding: 0 !important;
              border: 1px solid #000000 !important;
            }
            html body .item {
              width: 228px !important;
              max-width: 228px !important;
              padding: 0 !important;
              border: 1px solid #000000 !important;
            }
            .item[style*="width"] {
              width: 228px !important;
              max-width: 228px !important;
            }
            .item.item-showcase[style*="width"] {
              width: 228px !important;
              max-width: 228px !important;
            }
          `
        }} />
      </head>
      <body className="font-mono">
        <Suspense fallback={null}>{children}</Suspense>
        <ConditionalFooter />
        <Analytics />
      </body>
    </html>
  )
}

