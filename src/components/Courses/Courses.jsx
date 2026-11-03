import teacherImg from './assets/teacher.jpg'
import studentImg from './assets/student.png'
import dotsImg from './assets/dots.png'
import callEndIcon from './assets/call-end.png'
import arrowUpIcon from './assets/arrow-up.png'
import audioIcon from './assets/audio-icon.png'
import liveIcon from './assets/live-icon.png'
import recordedIcon from './assets/recorded-icon.png'

const Courses = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[140px]">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold text-[#0A033C] leading-[1.25] tracking-tight">
            High quality video, audio <br className="hidden sm:inline" />
            & live classes
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#5D5A6F] leading-relaxed max-w-[720px] mx-auto">
            High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than 480 vertical scan lines or 576 vertical lines is considered high-definition.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="bg-[#9C4DF4] hover:bg-[#8B3CE3] active:scale-95 transition-all text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md cursor-pointer"
            >
              Visit Courses
            </button>
          </div>
        </div>

        <div className="relative mt-14 md:mt-20 max-w-[960px] mx-auto">
          <img
            src={dotsImg}
            alt=""
            className="absolute -top-8 -right-6 sm:-top-12 sm:-right-8 md:-top-14 md:-right-10 w-28 sm:w-36 md:w-44 select-none pointer-events-none -z-0"
          />

          <div className="relative z-10 bg-white p-3 sm:p-5 md:p-6 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="relative w-full aspect-[16/9] rounded-[18px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-slate-900">
              <img
                src={teacherImg}
                alt="Teacher conducting live class"
                className="w-full h-full object-cover select-none"
              />

              <div className="absolute left-3 bottom-3 sm:left-5 sm:bottom-5 md:left-6 md:bottom-6 z-20">
                <img
                  src={studentImg}
                  alt="Student in online class"
                  className="w-24 sm:w-32 md:w-44 lg:w-[185px] rounded-xl sm:rounded-2xl shadow-xl select-none"
                />
              </div>

              <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-20">
                <button
                  type="button"
                  className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
                >
                  <img
                    src={callEndIcon}
                    alt="End call"
                    className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 drop-shadow-md"
                  />
                </button>
              </div>

              <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 right-4 sm:right-8 md:right-10 z-20">
                <button
                  type="button"
                  className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
                >
                  <img
                    src={arrowUpIcon}
                    alt="Expand controls"
                    className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 drop-shadow-md"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-[960px] mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow">
            <img
              src={audioIcon}
              alt="Audio Classes"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain select-none shrink-0"
            />
            <span className="text-base sm:text-lg font-bold text-[#0A033C]">
              Audio Classes
            </span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow">
            <img
              src={liveIcon}
              alt="Live Classes"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain select-none shrink-0"
            />
            <span className="text-base sm:text-lg font-bold text-[#0A033C]">
              Live Classes
            </span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow">
            <img
              src={recordedIcon}
              alt="Recorded Class"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain select-none shrink-0"
            />
            <span className="text-base sm:text-lg font-bold text-[#0A033C]">
              Recorded Class
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
