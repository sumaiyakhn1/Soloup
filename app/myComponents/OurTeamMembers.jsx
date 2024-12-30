'use client'
import Image from "next/image"
const OurTeamMembers=()=>{

    const ClintDetails =[
        {
            image:<Image src="/Images/User.png" width={380} height={70}/>,
            name:"Sumaiya",
            professions:"Web developer",
            
        },  {
            image:<Image src="/Images/User.png" width={380} height={70}/>,
            name:"Sundram",
            professions:"App Developer",
            
        },
        {
            image:<Image src="/Images/User.png" width={380} height={70}/>,
            name:"Sam",
            professions:"Logo Designer",
          
        }
    ]
    return(


        <div className=" sm:mt-16 h-full my-4 mt-12 ">
              {/* Heading */}
              <div className="flex flex-col  justify-center mb-12 items-center">
                <h2 className="font-bold sm:my-6 text-3xl text-blue-600">Team Members</h2>
                <h1 className="sm:text-5xl text-3xl  flex text-center w-[100%] sm:w-[50%] font-bold">Professional Stuffs Ready to Help Your Business
                </h1>
            </div>


  

    <div className="flex  sm:flex-row flex-col justify-center items-center gap-10">
        {
 
         ClintDetails.map((item ,index)=>{
            return(

                <>
                <div className="flex flex-col  h-[480px] bg-blue-400 w-[380px] items-center" key={index}>
                
                    <div className="">{item.image}</div>
                    <div className="mt-2 p-3">{item.name}</div>
                    <div>{item.professions}</div>

                </div>
                </>
            )

         })   
        }
    </div>


        </div>
    )
}
export default OurTeamMembers;