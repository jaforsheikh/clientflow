import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClientFlow CRM - Premium CRM Dashboard",
  description:
    "ClientFlow is a premium CRM dashboard for freelancers, agencies, and small businesses to manage leads, clients, deals, tasks, and revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}