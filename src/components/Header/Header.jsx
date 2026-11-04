import React from 'react'
import imgg  from"./img.png"
import shoping from"./shoping.png"
import outline from"./Outline.png"
const Header = () => {
  return (
  <>
  <section>
 
    <header className="w-full  px-35   py-6 bg-[#F7F5FA]">
      <div className="max-w-[1300px ] mx-auto flex items-center justify-between">

       
        <div className="flex items-center gap-2">
          <div className="bg-[#FF6652] text-white w-8 h-8 rounded flex items-center justify-center text-xl">
            <img src={imgg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-[#343434]">
            Eduvi
          </h1>
        </div>

      
        <nav className="flex items-center gap-10 text-[16px] text-[#0A033C]">
          <a href="#" className="hover:text-[#eb1d12]">Shop</a>

          <a href="#" className="hover:text-[#e3170c]">
            For Kindergarten
          </a>

          <a href="#" className="hover:text-[#e3170c]">
            For High School
          </a>

          <a href="#" className="hover:text-[#e3170c]">
            For College
          </a>

          <a href="#" className="hover:text-[#e3170c]">
            Courses
          </a>
        </nav>

        <div className="flex items-center gap-8 text-[#343434]">
          <a href="#" className="flex items-center gap-2">
            Cart (0) <span><img src={shoping} alt="" /></span>
          </a>

          <a href="#" className="flex items-center gap-2">
            My Account <span><img src={outline} alt="" /></span>
          </a>
        </div>

      </div>
    </header>


  </section>
  </>
  )
}

export default Header