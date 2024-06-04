import React from "react";

const Services = () => {
  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Dịch vụ của chúng tôi
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chúng tôi cung cấp nhiều dịch vụ vận chuyển để đáp ứng nhu cầu của
              bạn.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Xe đưa đón sân bay</h3>
            <p className="text-sm">
              Dịch vụ vận chuyển sân bay đáng tin cậy và hiệu quả.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Xe đưa đón doanh nghiệp</h3>
            <p className="text-sm">
              Dịch vụ vận chuyển chuyên dụng cho nhu cầu kinh doanh của bạn.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Tài xế riêng</h3>
            <p className="text-sm">Tận hưởng sự tiện lợi của tài xế riêng.</p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Vận chuyển sự kiện</h3>
            <p className="text-sm">
              Dịch vụ vận chuyển đáng tin cậy cho các sự kiện đặc biệt của bạn.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Tour tham quan thành phố</h3>
            <p className="text-sm">
              Khám phá thành phố một cách thoải mái với các tour du lịch có
              hướng dẫn viên của chúng tôi.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Các chuyến đi đường dài</h3>
            <p className="text-sm">
              Dịch vụ vận chuyển thoải mái và đáng tin cậy cho các chuyến đi
              đường dài.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
