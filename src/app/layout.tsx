import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script";
import ogImage from "./opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TAXI La Gi | Dịch Vụ Taxi Riêng | Gọi 0962 325023",
    template: "%s | TAXI La Gi",
  },
  description:
    "Đặt taxi riêng tại La Gi với tài xế giàu kinh nghiệm. Chúng tôi cung cấp xe 4-7 chỗ thoải mái cho du lịch, đưa đón sân bay, đám cưới và các chuyến đi dài. Gọi ngay 0962 325023!",
  metadataBase: new URL("https://www.taxilagi.com"),
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: "TAXI La Gi",
      },
    ],
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
