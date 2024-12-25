'use client'

import { MdOutlineSecurity } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { FaSearch } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
import { FaShoppingCart } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { HiSupport } from "react-icons/hi";
const Service = () => {
    const content = [
        { icon: <AiOutlineAntDesign />, name: "Custom Website Design", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: <DiResponsive />, name: "Responsive Web Development", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: < FaShoppingCart />, name: "E-commerce Solutions", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: < GrOptimize />, name: "SEO Optimization", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: <HiSupport />, name: "Website Maintenance and Support", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { heading: "", name: "", para: "" },
    ]
    return (
        <div className="sm:mt-36 mt-10">
            {/* Heading */}
            <div className="flex flex-col  justify-center items-center">
                <h2 className="font-bold sm:my-9 text-3xl text-blue-600">Our Services</h2>
                <h1 className="sm:text-6xl text-3xl  flex text-center w-[100%] sm:w-[50%] font-bold">Custom Web Solutions for Your Successful Business
                </h1>
            </div>
            {/* contentes */}
            <div className="flex flex-wrap justify-center items-center gap-16 mt-20">
                {
                    content.map((item, index) => {
                        return (
                            <>
                            {index==5? <div className="rounded-[2px] flex  h-[270px] w-[390px] bg-blue-100 justify-center flex-col items-center">

                            </div> :  <div className="rounded-[2px] flex  h-[270px] w-[390px] bg-blue-100 justify-center flex-col items-center">
                                    <div className="bg-blue-500 transform rotate-[50deg] rounded-[1px] mb-5">
                                        <p className="transform rotate-[-50deg] h-16 w-16 flex justify-center items-center text-white  ">{item.icon}</p>
                                    </div>
                                    <h1 className="font-bold text-center text-2xl">{item.name}</h1>
                                    <p className="flex text-center p-4">{item.para}</p>
                                </div>}

                              
                            </>
                        )

                    })
                }

            </div>

            <div>

            </div>
        </div>
    )
}

export default Service;