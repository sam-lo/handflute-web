import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"
import React from "react";

export const metadata: Metadata = {
  title: "Handflute Association",
  description: "Music For Everyone",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
