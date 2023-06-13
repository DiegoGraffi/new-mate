import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${font.variable} font-raleway`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
