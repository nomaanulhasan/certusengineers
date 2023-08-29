import "./globals.css";
import "./flaticon.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Rubik } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Footer, Header } from "@/components";

config.autoAddCss = false;
const rubik = Rubik({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Home - Certus Engineers",
  description:
    "Certus Engineers pvt. ltd. IT Training | IT Services | Consulting Let&#039;s Start What we do Training | Services | Consulting IT Training Upgrade your tech skills with our comprehensive IT training courses. From beginner to advanced, we cover the latest technologies and trends to help you succeed in your career. IT Services Our IT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#ff6d00"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Certus Engineers" />
        <meta name="application-name" content="Certus Engineers" />
        <meta name="msapplication-TileColor" content="#77ffff" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${rubik.className} overflow-x-hidden scroll-smooth`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
