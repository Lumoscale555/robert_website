import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bob Miller | High Performance Coaching",
  description:
    "Private high performance coaching for founders, leaders, and ambitious individuals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
