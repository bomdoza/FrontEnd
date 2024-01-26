"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html suppressHydrationWarning lang="pt">
      <head>
        <meta property="og:image" content="/images/blog/post1.png" />
        <meta name="twitter:card" content="summary_large"></meta>
        <meta property="og:description" content="Bom Doza serviço de limpeza" />
        <link rel="shortcut icon" href="/favicon.ico" type="img/png" />
        <title>Bom Doza</title>
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Suspense fallback={<p>Loading feed...</p>}>
            <Header />
          </Suspense>
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
