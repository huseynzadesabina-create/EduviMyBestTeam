import Bir from "../../assets/elvin-img/1.svg"
import Iki from "../../assets/elvin-img/2.svg"
import Uc from "../../assets/elvin-img/3.svg"
import Dord from "../../assets/elvin-img/4.svg"
import Bes from "../../assets/elvin-img/5.svg"
import Alti from "../../assets/elvin-img/6.svg"
import Yeddi from "../../assets/elvin-img/7.svg"
import Sekkiz from "../../assets/elvin-img/8.svg"

const Lessons = () => {
  return (
    <>
    <div className="lesson flex flex-col gap-9 items-center justify-center px-23 py-0 bg-[#F7F5FA] font-Arial ">
      <div className="less-head flex flex-col items-center justify-center gap-9">
        <h1 className="font-bold text-3xl">Qualified lessons for students</h1>
        <p>A lesson or class is a structured period of time where learning is intended to occur. It <br /> involves one or more students being taught by a teacher or instructor.</p>

        <div className="head-btn flex items-center gap-7">
          <p>Kindergarten</p>
          <button className="bg-[#FF6652] text-white border-none rounded-[9px] w-[100px] h-[40px]">High School</button>
          <p>College</p>
        </div>
      
      
      
      
      </div>


      <div className="less-carts flex gap-9 flex-wrap ml-7">
        
        

        <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Bir} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

         <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Iki} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

         <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Uc} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

         <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Dord} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

         <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Bes} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

         <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Alti} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

         <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Yeddi} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

         <div className="less-cart bg  w-[290px] h-[329px] flex flex-col items-center justify-center gap-8 shadow-xl">
          <img src={Sekkiz} alt="" className="w-[53px]" />
          <h4 className="font-bold text-xl">Standart One</h4>
          <p className="text-gray-500">Standard 1 is a foundation <br /> Standard that reflects 7 <br /> important concepts...</p>
          <button className="bg-transparent text-[#9C4DF4] border-[1px] border-[#9C4DF4] rounded-[9px] w-[140px] h-[40px]">Class Details</button>
          
        </div>

       

      </div>

      <button className="bg-[#9C4DF4] text-white border-[1px] border-[#9C4DF4] rounded-[9px] w-[160px] h-[43px]">Visit More Classes</button>
    
    
    
    
    </div>
    </>
  )
}

export default Lessons