import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "../components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Bob Miller | High Performance Coaching",
  description:
    "Private high performance coaching for founders, leaders, and ambitious individuals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
