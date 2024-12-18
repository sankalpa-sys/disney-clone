import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Disney Clone",
  description: "A Disney+ clone built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="dark:bg-[#1A1C29] bg-white">

      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <Header />
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
