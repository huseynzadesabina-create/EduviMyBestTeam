import React from 'react'
import Student from './Student.png'

const Career = () => {
  return (
    <main className="flex h-screen w-full  items-center justify-center gap-14  bg-[#F7F5FB] p-[0_140px]">

      {/* Sol*/}
      <div className="img w-[55%] h-[80%] flex items-center justify-center bg-[#F7F5FA] ">
        <div className="flex relative z-0 h-[530px] w-[530px] items-start justify-center  rounded-tl-full rounded-tr-full rounded-bl-full bg-gradient-to-b from-[#FF6B57] to-[#F7F5FB]">
  <img src={Student} alt="Student" className=" absolute z-10  h-[550px]  max-w-none left-[110px] bottom-[0px] " />
</div>
      </div>

      {/* Sağ */}
      <div className="text   flex flex-col w-[55%] h-[480px] gap-10">
        <div className="txt flex  flex-col gap-5 w-[580px]  ">
          <div className='w-[590px]'>
            <h1 className="text-5xl leading-15 font-bold text-[#0F0A3D]">
            Want to share your knowledge? Join us a Mentor
          </h1>
          </div>
          <p className="  leading-8 text-justify  text-[19px] text-gray-500">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video.
          </p>
        </div>

        <button className="rounded-xl bg-[#9B4DF5] text-[20px] text-white w-[220px] h-[70px]">
          Career Information
        </button>
      </div>

    </main>
  )
}

export default Career