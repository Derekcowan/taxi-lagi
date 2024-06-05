import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TAXI La Gi | Dịch Vụ Taxi Riêng | Gọi 0962 325023",
    template: "%s | TAXI La Gi",
  },
  description:
    "Đặt taxi riêng tại La Gi với tài xế giàu kinh nghiệm. Chúng tôi cung cấp xe 4-7 chỗ thoải mái cho du lịch, đưa đón sân bay, đám cưới và các chuyến đi dài. Gọi ngay 0962 325023!",
  category: "Travel",
  keywords:
    "taxi la gi, taxi riêng, taxi la gi bình thuận, taxi la gi bình thuận",
  creator: "Derek Cowan",

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CLHW0DKC34"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CLHW0DKC34');`}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
