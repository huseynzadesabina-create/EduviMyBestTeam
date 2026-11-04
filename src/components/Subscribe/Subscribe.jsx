import React from 'react'
import E1 from './E1.png'
import E2 from './E2.png'
import E3 from './E3.png'
import E4 from './E4.png'
import E5 from './E5.png'
import E6 from './E6.png'



 const Subscribe = () => {
  return (
    <main className=' w-full h-screen flex items-center justify-center p-[0_140px]'>

      <div className="esas w-[95%] h-[58%] rounded-4xl bg-[rgba(10,3,60,1)] flex overflow-hidden">

        {/* Sol  */}
        <div className="sec-1 w-[25%] h-[100%] relative">
          <div className="absolute top-16 left-16 w-21 h-21 rounded-full overflow-hidden border-2 border-white/20">
            <img src={E1} alt="Student 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/2 left-54 -translate-y-1/2 w-21 h-21 rounded-full overflow-hidden border-2 border-white/20">
            <img src={E2} alt="Student 2" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-16 left-19 w-21 h-21 rounded-full overflow-hidden border-2 border-white/20">
            <img src={E3} alt="Student 3" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Orta  */}
        <div className="sec-2 w-[50%] h-[100%] flex flex-col items-center justify-center gap-3 text-center">
          <div className="text text- center gap-9 h-[300px] w-[100%] flex flex-col items-center justify-center text-center">
            <h1 className='text-6xl text-[#F7F5FB] leading-19 font-bold relative'>
              Subscribe For Get Update Every New Courses
            </h1>
            <p className=' leading-7  text-[22px] text-gray-300'>
              20k+ students daily learn with Eduvi. Subscribe for new courses.
            </p>
          </div>

          
          <div className="input bg-[#2E2B4B] w-[643px] h-[75px] rounded-xl flex text-white relative items-center overflow-hidden">
            <input 
              placeholder='enter your email' 
              type="text" 
              className='indent-5 placeholder:text-white text-white text-xl w-full h-full bg-transparent focus:outline-none' 
            />
            <button className='absolute right-0 bg-[#9B4DF5] h-[75px] w-[180px] text-xl text-white rounded-tr-xl rounded-br-xl flex items-center justify-center'>
              Subscribe
            </button>
          </div>
        </div>

        {/* Sağ */}
        <div className="sec-3 w-[25%] h-[100%] relative">
          <div className="absolute top-16 right-16 w-21 h-21 rounded-full overflow-hidden border-2 border-white/20">
            <img src={E4} alt="Student 4" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/2 right-54 -translate-y-1/2 w-21 h-21 rounded-full overflow-hidden border-2 border-white/20">
            <img src={E5} alt="Student 5" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-16 right-19 w-21 h-21 rounded-full overflow-hidden border-2 border-white/20">
            <img src={E6} alt="Student 6" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

    </main>
  )
}

export default Subscribe