import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/SideBar/SideBar";
import NavBar from "@/components/Navbar/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout ({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <SideBar />
      <body>{children}</body>
    </html>
  );
}
