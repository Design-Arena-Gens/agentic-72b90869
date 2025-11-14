import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Million-Dollar Blueprint",
  description:
    "A structured, theoretically foolproof roadmap for generating one million dollars starting from nothing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
