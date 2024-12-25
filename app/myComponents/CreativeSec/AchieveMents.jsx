'use client'
import { FaUsers } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaAward } from "react-icons/fa6";
import CountUp from 'react-countup';
// import { stat } from "fs";
const achieve=()=>{
    const stats=[
        {  
            icons:<FaUsers/>,
            num:10,
            text:"Happy Clients"},
            {  
                icons:<TiTick/>,
                num:10,
                text:"Projects Done"},
                {  
                    icons:<FaAward/>,
                    num:1,
                    text:"Award"},
    ]
    return(
        <section className='pt-4   sm:mt-[6rem] mt-[30rem] w-full absolute   xl:pt-0 xl:pb-0'>
        <div className='container flex items-center justify-center sm:flex-row flex-col mx-auto md:mt-[40rem] w-full'>
          <div className='flex justify-center items-center flex-wrap sm:max-w-[80vw]'>
            {stats.map((item, index) => (
              <div
                className={`flex bg-blue-500 h-48 sm:w-96 w-full shadow-xl items-center justify-center key={index} ${index === 1 ? 'bg-white' : 'bg-blue-500'}`}
                key={index}
              >
                <div
                  className={`bg-blue-500 h-12 flex items-center justify-center mx-4 w-12 ${index === 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                >
                  {item.icons}
                </div>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className='text-4xl xl:text-6xl font-extrabold'
                />
                <p className='font-extrabold text-3xl'>+</p>
                <p
                  className={`${item.text.length < 20 ? 'max-w-[120px]' : 'max-w-[200px]'} text-lg font-bold`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      


    )
}

export default achieve;