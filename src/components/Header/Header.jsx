import React from 'react'

const Header = () => {
  return (
  <>
  <section>
 
    <header className="w-full bg-white px-8 py-6">
      <div className="max-w-[1300px ] mx-auto flex items-center justify-between">

       
        <div className="flex items-center gap-2">
          <div className="bg-[#E58B86] text-white w-8 h-8 rounded flex items-center justify-center text-xl">
            📖
          </div>
          <h1 className="text-3xl font-bold text-[#343434]">
            Eduvi
          </h1>
        </div>

      
        <nav className="flex items-center gap-10 text-[16px] text-[#343434]">
          <a href="#" className="hover:text-[#E58B86]">Shop</a>

          <a href="#" className="hover:text-[#E58B86]">
            For Kindergarten
          </a>

          <a href="#" className="hover:text-[#E58B86]">
            For High School
          </a>

          <a href="#" className="hover:text-[#E58B86]">
            For College
          </a>

          <a href="#" className="hover:text-[#E58B86]">
            Courses
          </a>
        </nav>

        <div className="flex items-center gap-8 text-[#343434]">
          <a href="#" className="flex items-center gap-2">
            Cart (0) <span>🛍️</span>
          </a>

          <a href="#" className="flex items-center gap-2">
            My Account <span>.</span>
          </a>
        </div>

      </div>
    </header>


  </section>
  </>
  )
}

export default Header