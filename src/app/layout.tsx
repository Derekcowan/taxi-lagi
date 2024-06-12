import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ogImage from "./opengraph-image.png";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const beVietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TAXI La Gi | Dịch Vụ Taxi Riêng | Gọi 0962 325023",
    template: "%s | TAXI La Gi",
  },
  description:
    "Đặt taxi riêng tại La Gi với tài xế giàu kinh nghiệm. Chúng tôi cung cấp xe 4-7 chỗ thoải mái cho du lịch, đưa đón sân bay, đám cưới và các chuyến đi dài. Gọi ngay 0962 325023!",
  metadataBase: new URL("https://www.taxilagi.com"),
  keywords: ["taxi", "taxi riêng", "taxi La Gi", "taxi Bình Thuận"],
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
      <GoogleAnalytics />
      <body className={beVietnam.className}>
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
