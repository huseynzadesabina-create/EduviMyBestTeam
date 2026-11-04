import studentImage from "./Image-2.png";
import htmlIcon from "./sual.png";
import javaIcon from "./java.png";
import phpIcon from "./php.png";

export default function Collage() {
  return (
    <section className="flex min-h-screen w-full items-center bg-[#F8F7FC] px-5 py-8 sm:px-10 lg:h-screen lg:px-[140px] lg:py-10">
      <div className="relative isolate mx-auto w-full max-w-[1440px] overflow-hidden rounded-[24px] bg-[#EDE9F3] lg:h-full lg:max-h-[800px]">
        {/* Mətn hissəsi */}
        <div className="relative z-20 flex flex-col items-start px-7 py-12 sm:px-12 lg:h-full lg:w-[48%] lg:justify-center lg:py-10 lg:pl-[6%] lg:pr-0">
          <span className="inline-flex items-center rounded-xl bg-[#E5DFF4] px-5 py-3 text-base font-medium text-[#A04BFF] xl:text-xl">
            College Level
          </span>

          <h2 className="mb-0 mt-5 text-[30px] font-bold leading-[1.25] tracking-[-0.025em] text-[#10083F] sm:text-[38px] lg:text-[clamp(28px,2.8vw,48px)]">
            Don’t waste time in
            <br className="hidden lg:block" />{" "}
            COVID-19 pandemic.
            <br className="hidden lg:block" />{" "}
            Develop your skills.
          </h2>

          <p className="mb-0 mt-7 max-w-[510px] text-sm leading-[1.9] text-[#777184] xl:text-base">
            High-definition video is video of higher resolution and
            quality than standard-definition. While there is no
            standardized meaning for high-definition, generally any
            video.
          </p>

          <a
            href="/register"
            className="mt-9 inline-flex min-h-[54px] items-center justify-center rounded-xl bg-[#9D46F5] px-7 text-sm font-medium text-white no-underline transition-colors duration-300 hover:bg-[#8734DF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9D46F5] xl:mt-12 xl:min-h-[64px] xl:px-8 xl:text-base"
          >
            Registration Now
          </a>
        </div>

        {/* Şəkil hissəsi */}
        <div className="relative h-[420px] w-full sm:h-[520px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[54%]">
          {/* Bənövşəyi + naxışı */}
          <div
            aria-hidden="true"
            className="absolute left-[24%] top-[8%] z-0 h-[190px] w-[190px] opacity-90 xl:h-[220px] xl:w-[220px]"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M10 7v6M7 10h6' stroke='%239D46F5' stroke-width='1.2'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />

          {/* Alt kölgə */}
          <div
            aria-hidden="true"
            className="absolute bottom-[-20px] right-[-5%] z-0 h-[90px] w-[95%] rounded-[50%] bg-[#55485E]/20 blur-[30px]"
          />

          {/* Adam və masa */}
          <img
            src={studentImage}
            alt="Masa arxasında noutbukla dərs oxuyan tələbə"
            className="absolute bottom-0 right-0 z-10 block h-[88%] w-full max-w-none object-contain object-right-bottom lg:h-[90%]"
          />

          {/* HTML ikonu */}
          <div className="absolute left-[13%] top-[29%] z-20 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <img
              src={htmlIcon}
              alt="HTML"
              className="block h-[120px] w-[120px] max-w-none shrink-0 object-contain"
            />
          </div>

          {/* Java ikonu */}
          <div className="absolute right-[17%] top-[12%] z-20 flex h-[64px] w-[64px] translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <img
              src={javaIcon}
              alt="Java"
              className="block h-[120px] w-[120px] max-w-none shrink-0 object-contain"
            />
          </div>

          {/* PHP ikonu */}
          <div className="absolute right-[26%] top-[34%] z-20 flex h-[64px] w-[64px] translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <img
              src={phpIcon}
              alt="PHP"
              className="block h-[120px] w-[120px] max-w-none shrink-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}