import type { Metadata } from "next";
import "./globals.css";



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
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
