import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { i18n } from "@/config/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}


export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html suppressHydrationWarning lang={lang}>
      <head>
        <meta property="og:image" content="/images/blog/post1.png" />
        <meta name="twitter:card" content="summary_large"></meta>
        <meta property="og:description" content="Bom Doza serviço de limpeza" />
        <link rel="shortcut icon" href="/favicon.ico" type="img/png" />
        <title>Bom Doza</title>
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
            <Header />
          {children}
          <Footer />
          {/*<ScrollToTop />*/}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
