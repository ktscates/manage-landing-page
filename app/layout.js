import React from "react";
import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | Manage landing page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
