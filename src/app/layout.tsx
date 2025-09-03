import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Portal",
  description: "Learning Outreach User Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
