import Image from "next/image";

const AreaCovered = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Khu vực chúng tôi phục vụ
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Dịch vụ tài xế riêng của chúng tôi có sẵn ở các khu vực sau.
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="Khu vực chúng tôi phục vụ"
            height="600"
            src="/TAXI La Gi, Binh Thuan map.png"
            width="800"
            className="mx-auto rounded-lg object-cover"
            quality={60}
          />
        </div>
        {/* <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">New York City</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Serving all five boroughs of New York City.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Los Angeles</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Providing transportation throughout the LA metro area.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Chicago</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Serving the greater Chicago metropolitan region.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Miami</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Covering Miami and the surrounding South Florida area.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Boston</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Serving the greater Boston metropolitan region.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-bold">Washington, D.C.</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Providing transportation throughout the D.C. metro area.
        </p>
      </div>
    </div> */}
      </div>
    </section>
  );
};

export default AreaCovered;
