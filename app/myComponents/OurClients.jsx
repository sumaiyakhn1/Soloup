'use client'
import Image from "next/image"
const PricingPlans = () => {
    const cards=[
        {
            image:<Image src="/Images/AboutUs.jpg" width={60} height={70}/>,
            name:"Sumaiya",
            professions:"",
            says:""
        },
        {
            image:<Image src="/Images/AboutUs.jpg" width={60} height={70}/>,
            name:"Sundram",
            professions:"",
            says:""
        },
        {
            image:<Image src="/Images/AboutUs.jpg" width={60} height={70} alt=""/>,
            name:"bbj",
            professions:"",
            says:""
        }
    ]

    return (
        <div className="sm:mt-28  mt-28 ">
            {/* Heading */}
            <div className="flex flex-col  justify-center mb-16 items-center">
                <h2 className="font-bold sm:my-6 text-xl text-blue-600 ">TESTIMONIAL</h2>
                <h1 className="sm:text-5xl text-3xl  flex text-center w-[100%] sm:w-[50%] font-bold">What Our Clients Say About Our Digital Services
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:mt-24  justify-center items-center">
                {
                    
                  cards.map((item,index)=>{
                    return(

                        <>
                        <div className={`bg-blue-200 shadow-xl   h-[300px] w-[430px] rounded-sm key={index} ${index == 1 ? "bg-white" : "bg-blue-200"}`}>
                            <div className="img ml-10">
                                <div className="h-[100px] flex gap-4 items-center ">
                                <div className="img">{item.image} </div>
                                <p>{item.name}</p>
                                </div>
                                <p>proffesion</p>
            
                            </div>
                            <hr/>
                            <p className="m-4 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aspernatur doloremque perferendis error eaque animi nisi iste laborum tempora inventore.</p>


                        </div>
                        
                        </>
                    )

                  })
                        
                    
                }
            </div>
        </div>
    )
}
export default PricingPlans;