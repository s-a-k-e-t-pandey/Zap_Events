import type { Metadata } from "next";
import "./globals.css";
import { Appbar } from "@/componets/Appbar";

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
      <body
      >
        <Appbar></Appbar>
        {children}
      </body>
    </html>
  );
}
