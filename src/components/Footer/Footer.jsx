import React from 'react'
import img from "./imgg.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <section className=' w-[100%] h-[400px] flex justify-center items-center  gap-[60px]  px-[150px] bg-[#F7F5FA]'>
      <footer className="  w-[90%] h-[400px]">
        <div className=" grid grid-cols-5 flex justify-between font-Arial gap-[30px] ">

          <div>
            <div className="flex items-center gap-2">
              <div className="bg-[#FF6652] text-white w-8 h-8 rounded flex items-center justify-center text-xl">
                <img src={img} alt="" />
              </div>
              <h1 className="text-3xl font-bold text-[#343434]">
                Eduvi
              </h1>
            </div>

            <div className='flex gap-5'>
              <FaFacebook className="flex gap-5 mt-8 text-2xl text-[#0A033C]" />
              <div className=" mt-6 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-[#0A033C]">
                <FaInstagram size={18} color="white" />
              </div>
              <FaTwitter className="flex gap-5 mt-8 text-2xl text-[#0A033C]" />
              <FaLinkedin className="flex gap-5 mt-8 text-2xl text-[#0A033C]" />
            </div>

            <p className="text-[#5D5A6F] mt-14 text-[16px]">
              ©2021 Eduvi.co
            </p>

            <p className=" mt-5 text-[#5D5A6F] leading-6">
              Eduvi is a registered<br />
              trademark of Eduvi.co
            </p>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold mb-6 text-[#0A033C]">
              Courses
            </h3>
            <ul className="space-y-4 text-[#5D5A6F] text-[16px]">
              <li>Classroom courses</li>
              <li>Virtual classroom courses</li>
              <li>E-learning courses</li>
              <li>Video Courses</li>
              <li>Online Courses</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-[#0A033C] mb-6 text-[22px]">
              Community
            </h3>
            <ul className="space-y-4 text-[#5D5A6F] text-[16px]">
              <li>Learners</li>
              <li>Partners</li>
              <li>Developers</li>
              <li>Transactions</li>
              <li>Blog</li>
              <li>Teaching Center</li>
            </ul>
          </div>


          <div>
            <h3 className="text-[22px] font-semibold text-[#0A033C] mb-6">
              Quick links
            </h3>
            <ul className="space-y-4 text-[#5D5A6F] text-[16px]">
              <li>Home</li>
              <li>Professional Education</li>
              <li>Courses</li>
              <li>Admissions</li>
              <li>Testimonial</li>
              <li>Programs</li>
            </ul>
          </div>



          <div>
            <h3 className="text-[22px] font-semibold text-[#0A033C] mb-6">
              More
            </h3>
            <ul className="space-y-4 text-[#5D5A6F] text-[16px] ">
              <li>Press</li>
              <li>Investors</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer