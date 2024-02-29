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
  title: "My Plant",
  description: "A website to find favourite plant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex items-center justify-center bg-[url(/background.webp)] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-5 w-[80%] h-[80%]">
          <Navbar />
          <div className="w-full h-full">
            <div className="h-[10%]">
              <Pathname />
            </div>
            <div className="bg-slate-50 bg-opacity-30 backdrop-blur-3xl rounded-3xl w-full h-[90%]">
              <div className="h-[20%] md:h-[15%]">
                <Action />
              </div>
              <div className="overflow-visible w-full h-[80%] md:h-[85%]">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
