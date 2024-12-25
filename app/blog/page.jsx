'use client'
import Image from "next/image"
import { FaRegUser } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
const Blogs=()=>{
    const ClintDetails =[
        {
            image:<Image src="/Images/AboutUs.jpg" width={380} height={70}/>,
            user:"Sundram",
            date:"22/12/24",
            heading:"web development" ,
            para:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cupiditate."  
          
        },
        {
            image:<Image src="/Images/AboutUs.jpg" width={380} height={70}/>,
            user:"Sundram",
            date:"22/12/24",
            heading:"web development" ,
            para:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cupiditate."  
          
        },
        {
            image:<Image src="/Images/AboutUs.jpg" width={380} height={70}/>,
            user:"Sundram",
            date:"22/12/24",
            heading:"web development" ,
            para:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cupiditate."  
          
        }
    ]
    return(
        <div className=" sm:mt-16 mt-9 h-full">
              {/* Heading */}
              <div className="flex flex-col  justify-center mb-12 items-center">
                <h2 className="font-bold sm:my-6 text-xl text-blue-600">Latest Blog</h2>
                <h1 className="sm:text-5xl text-3xl  flex text-center w-[100%] sm:w-[50%] font-bold">Read The Latest Articles from Our Blog Post
                </h1>
            </div>


  

    <div className="flex  sm:flex-row flex-col justify-center items-center gap-10">
        {
 
         ClintDetails.map((item ,index)=>{
            return(

                <>
                <div className="flex flex-col  h-[480px] bg-blue-400 w-[380px] items-center">
                
                    <div className="">{item.image}</div>
                    <div className="mt-2 p-3 flex  w-full ml-10 gap-5">
                        <div className="flex  items-center gap-1">
                            <p><FaRegUser/></p>
                             <h1>{item.user}</h1>
                              </div>
                              <div className="flex justify-center items-center gap-1">
                            <p><FaRegCalendarDays/></p>
                             <h1>{item.date}</h1>
                              </div>
                        
                      

                        </div>
                    <div>{item.professions}</div>
                    <div className="flex absolute justify-start items-start mt-[140px] w-[380px]">Name</div>

                </div>
                </>
            )

         })   
        }
    </div>


        </div>
     
    )
}

export default Blogs;