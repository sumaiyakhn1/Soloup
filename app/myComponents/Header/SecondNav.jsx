
"use client"
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {  usePathname } from 'next/navigation';


const SecondNav=({containerStyle,linksStyle})=>{
    const pathname=usePathname();

    const links=[
        {name:"home",path:"/"},
        {name:"about",path:"/about"},
        {name:"services",path:"/services"},
        {name:"blog",path:"/blog"},
        {name:"plans",path:"/plans"},
  
    ]
    return(
<div className="flex  justify-between items-center h-24 ">
    {/* logo section */}
    <div className=" font-bold flex justify-center items-center ml-9">
        <span className="text-5xl font-mono text-blue-600 font-bold ">Soloup</span>
        <span><Image src={"/Images/logo.png"} className="" width={50} height={100} alt="img" ></Image></span>
    </div>


    {/* nav link secotion */}
    <div className="flex justify-between px-5 mr-24  ">

    <nav className='flex px-7 justify-center items-center mr-28 gap-8 text-lg'>
      {
        links.map((link,index)=>{
          return<Link href={link.path} key={index} className={`${link.path===pathname && "text-blue-800 border-b-2 border-blue-800"} capitalize font-medium hover: border-blue-700   transition all `}>{link.name}</Link>
        })
      }
    </nav>

  

{/* button section */}
<div className="h-10 flex justify-center items-center w-36 bg-amber-500">
<Link href={"/contact"}>Contact Us</Link>
</div>
    
</div>
</div>

    )
}

export default SecondNav;