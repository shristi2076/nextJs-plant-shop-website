import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pathname from "./components/Pathname";
import Action from "./Action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex items-center justify-center bg-[url(/background.webp)] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col-reverse md:flex-row md:gap-5 w-[80%] h-[80%] ">
          <Navbar />
          <div className="flex flex-col gap-2 w-full h-full">
            <Pathname />
            <div className="bg-slate-50 bg-opacity-30 backdrop-blur-3xl rounded flex-1 ">
              <Action />
              <div className="overflow-visible w-full h-full">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
