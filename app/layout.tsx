import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AiOutlineHeatMap } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ushers's blog",
  description: "This is a blog, that makes good feels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <div className="container m-auto">
          <header className="pt-7 pb-7">
            <nav className="flex justify-between">
              <Link
                href="/"
                className="text-4xl inline-block pl-2 pb-2 hover:text-yellow-700 transition"
              >
                <AiOutlineHeatMap />
              </Link>
              <ul className="flex justify-end gap-20">
                <li>
                  <Link
                    href="/main"
                    className="hover:underline hover:text-neutral-500 underline-offset-4"
                  >
                    Main
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline hover:text-neutral-500 underline-offset-4"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="hover:underline hover:text-neutral-500 underline-offset-4"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <main>
          <div className="container xl:border-x border-neutral-600 m-auto min-h-72">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
