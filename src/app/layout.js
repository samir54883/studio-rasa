import { Montserrat } from "next/font/google";
import "./globals.css";

import BackToTop from "@/components/BackToTop/BackToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="top">
      <body className={montserrat.className}>
        {children}

        <BackToTop />
      </body>
    </html>
  );
}