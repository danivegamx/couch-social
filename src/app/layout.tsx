import Image from "next/image";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DesktopNavigation from "../components/navigation/desktop";
import MobileNavigation from "../components/navigation/mobile";

import "./globals.css";
import "../styles/styles.sass";

import { UserProvider } from "../context/userContext";
import { PostProvider } from "../context/postContext";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CouchSocial",
  description: "Code Task for Couchsurfing recruitment process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} antialiased`}
      >
        <UserProvider>
          <PostProvider>
            <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
              <main className="container flex flex-col gap-8 row-start-2 items-center my-7">
                <div className="grid grid-cols-10 gap-4 w-full">
                  <div className="col-span-2 hidden md:flex flex-col">
                    <figure className="flex items-center py-3">
                      <Image
                        src="/cs_logo.svg"
                        alt="CouchSocial Logo"
                        width={28}
                        height={28}
                        className="text-center"
                      />
                      <figcaption className="logo-name ml-4">CouchSocial</figcaption>
                    </figure>
                    <DesktopNavigation />
                  </div>
                  <div className="col-start-1 col-end-11 md:col-span-8 py-3 px-5">
                    {children}
                  </div>
                </div>
              </main>
              <MobileNavigation />
            </div>
          </PostProvider>
        </UserProvider>
      </body>
    </html>
  );
}
