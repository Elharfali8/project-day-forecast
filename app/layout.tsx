import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Day Forecast",
  description: "Weather forecast for the next days",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={` antialiased`}
        >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
        </ClerkProvider>
  );
}
