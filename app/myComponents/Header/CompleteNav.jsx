"use client"
import TopNav from "./TopNav";
import MobileNav from "./MobileNav"
import SecondNav from "./SecondNav"
import Hembar from "./Hembar"
import { useState } from "react";
import Link from "next/link";

const CompleteNav=()=>{
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        
            setIsNavVisible((prev) =>!prev);
          
      };
    return(
<div className="">

<div className="hidden lg:block">
    
<TopNav className=""></TopNav>
<SecondNav  className="" linksStyle="" >

</SecondNav>
</div>

   
<div className="pt-4 pb-4 lg:hidden">
<div className='text-center flex justify-center font-bold text-4xl'><Link href="/"><h1 >Soloup</h1></Link><Hembar onClick={toggleNav}/></div>
   
{isNavVisible&&<MobileNav/>}
    

   
 
    </div>


</div>
    )
}
export default CompleteNav;