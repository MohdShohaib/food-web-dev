import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "../redux/provider";
// import { SidebarProvider } from "../components/ui/sidebar";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Grubpac Food",
  description: "This is the food dashboard for Grubpac",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ReduxProvider>
          {/* <SidebarProvider> */}
            {children}
          {/* </SidebarProvider> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
