'use client'
import Link from "next/link";
import AchieveMents from "./AchieveMents"
const CraetiveSec=()=>{

    return(
        <div className="  relative bg-[url('/Images/background.jpg')] sm:h-screen h-[400px] sm:px-0 px-3  bg-cover bg-center w-full  bg-red-500 md:mx-auto md:w-full">
        <div className="absolute inset-0 bg-black/50   text-white text-center w-full  pt-20">
          <div className="relative z-10 opacity-100  pt-20">
            <h1 className=" text-2xl font-bold">Creative & Innovation</h1>
            <h1 className="text-white  text-4xl  font-bold text-center pt-1  sm:text-7xl">Creative & Innovative </h1>
            <h1 className="text-white text-4xl font-bold text-center pt-1 sm:text-7xl ">Digital Solution</h1>
            {/* buttons */}
            <div className=" text-center flex  items-center justify-center">
                <Link href={""} className="    bg-blue-700 text-white h-12 flex justify-center items-center w-32 m-6 sm:m-8 ">Free Quote</Link>
                <Link href={""} className=" text-white   outline outline-white  bg-transparent  h-12 flex justify-center items-center w-32  hover:bg-white hover:text-blue-700  ease-in duration-300">Contact us</Link>
            </div>

          </div>
        </div>

        <AchieveMents></AchieveMents>
        
        
       
      </div>
      
    )

}
export default CraetiveSec;
