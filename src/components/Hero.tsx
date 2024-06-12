import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { Separator } from "./ui/separator";

const Hero = () => {
  return (
    <main className="flex-1">
      <section className="w-full border-y pt-12 md:pt-24 lg:pt-32">
        <div className="space-y-10 px-2 md:px-6 xl:space-y-16">
          <div className="mx-auto grid max-w-[1300px] justify-center gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
            <div className="flex flex-col justify-center gap-y-1">
              <span className="text-xm font-semibold tracking-wide text-muted-foreground lg:text-xl">
                TÀI XẾ RIÊNG
              </span>
              <h1 className="lg:leading-tighter mb-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-[3.75rem]">
                Bạn đi đâu? Đi xe thoải mái cùng Thịnh!
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Chúng tôi cung cấp dịch vụ taxi riêng với xe 4-7 chỗ cho các nhu
                cầu du lịch, đưa đón sân bay, đám cưới, và các chuyến đi ngắn
                hoặc dài. Tài xế giàu kinh nghiệm, lịch sự, vận hành xe mới có
                máy lạnh và wifi.
              </p>
              <div className="mt-4 flex flex-row flex-wrap gap-2 py-4">
                <Button variant="default" size="lg">
                  <Link
                    href="tel:0962325023"
                    className="text-lg font-bold tracking-wider text-foreground"
                  >
                    0962 325 023
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-blue-400 hover:bg-blue-300"
                >
                  <Link href="https://zalo.me/0962325023" className="text-lg">
                    Zalo
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="mt-1 flex flex-row justify-between gap-x-2 md:justify-normal md:gap-x-3 lg:justify-normal lg:gap-x-4 xl:justify-normal">
                <div className="flex flex-row items-center gap-x-2 text-xs lg:text-base">
                  <MessageCircle className="h-6 w-6 text-primary" /> Hỗ trợ
                </div>
                <div className="flex flex-row items-center gap-x-2 text-xs lg:text-base">
                  <Clock className="h-6 w-6 text-primary" /> 24/24
                </div>
                <div className="flex flex-row items-center gap-x-2 text-xs lg:text-base">
                  <MapPin className="h-6 w-6 text-primary" /> La Gi, Bình Thuận
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-start space-y-4">
              <Image
                alt="Hero"
                src="/Taxi-Lagi-Thinh.png"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height={550}
                width={550}
                quality={60}
                priority
              />
            </div>
          </div>
          <div className="h-12" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
