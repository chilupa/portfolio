import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Pavan | Portfolio",
  description: "Full Stack Developer Portfolio",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} root-layout`}>
        {children}
      </body>
    </html>
  );
}
