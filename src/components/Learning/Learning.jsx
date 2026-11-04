import React from 'react'
import myImage from "../../assets/emage_learning.png";
const Learning = () => {
  return (
    <div className='w-full h-[90vh] px-13.75  flex justify-center pb-[50px] bg-[#F7F5FA] font-Arial'>
      <div className='w-[96%] h-full flex items-center'>
        <div className='h-[60%] w-[100%]'>
          <div className='h-full w-[100%] flex flex-col justify-between'>
            <div className='w-fit rounded-[10px]'>
              <p className='text-[rgba(255,102,82,1)] bg-white shadow p-2 w-[100%] rounded-[10px] px-[20px] text-[20px]'>Never Stop Learning</p>
            </div>
            <div className='flex flex-col justify-between gap-[50px]'> 
              <p className='text-[16px]'>Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
              <div className='flex justify-between  bg-white shadow p-2 w-[100%] rounded-[10px] px-[20px] '>
                <div className='flex justif-center items-center gap-5'>
                  <select name="" id="" className='border-none outline-none text-[rgba(93,90,111,0.6)] focus:text-black'>
                    <option value="Kindergarten" className='text-red-500'>Kindergarten</option>
                  </select>
                  <p className='text-[rgba(218,218,218,1)]'>|</p>
                  <input type="text" placeholder='Class/Course' className='border-none outline-none text-[rgba(93,90,111,0.6)] focus:text-black'/>
                </div>
                <div>
                  <button className='w-[120px] h-[40px] bg-[rgba(156,77,244,1)] text-white rounded-[10px]'><i class="fa-solid fa-magnifying-glass"></i>Search</button>
                </div>


              </div>
            </div>

          </div>

        </div>
        <div className='h-full w-[100%] flex justify-end'>
          <div className='w-[80%] h-[90%]'>
            <img src={myImage} alt="sekil" className='w-[100%] h-[100%] ' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Learning