import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAXI La Gi | Dịch Vụ Taxi Riêng | Gọi 0962 325023",
  description:
    "Đặt taxi riêng tại La Gi với tài xế giàu kinh nghiệm. Chúng tôi cung cấp xe 4-7 chỗ thoải mái cho du lịch, đưa đón sân bay, đám cưới và các chuyến đi dài. Gọi ngay 0962 325023!",

  openGraph: {
    type: "website",
    title: "TAXI La Gi | Dịch Vụ Taxi Riêng | Gọi 0962 325023",
    description:
      "Đặt taxi riêng tại La Gi với tài xế giàu kinh nghiệm. Chúng tôi cung cấp xe 4-7 chỗ thoải mái cho du lịch, đưa đón sân bay, đám cưới và các chuyến đi dài. Gọi ngay 0962 325023!",
    images: [
      {
        url: "/Taxi La Gi Thinh 800x600.png",
        width: 1200,
        height: 630,
        alt: "TAXI La Gi",
      },
    ],
    url: "https://taxilagi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAXI La Gi | Dịch Vụ Taxi Riêng | Gọi 0962 325023",
    description:
      "Đặt taxi riêng tại La Gi với tài xế giàu kinh nghiệm. Chúng tôi cung cấp xe 4-7 chỗ thoải mái cho du lịch, đưa đón sân bay, đám cưới và các chuyến đi dài. Gọi ngay 0962 325023!",
    images: ["/Taxi La Gi Thinh (2).png]"],
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
