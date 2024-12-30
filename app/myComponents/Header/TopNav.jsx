import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Socials from "./Socials"


const TopNav=()=>{
    return(
        
<div>
<div className="bg-gray-900 items-center justify-between text-white flex w-full mx-0  will-change-auto  py-2">
    <div className="flex items-center px-10 gap-5  ">
    <div className="flex  items-center">
<CiLocationOn/>
<p className="text-sm ">Panipat,Haryana,India</p>

</div>
<div className="flex items-center ">
<IoCall />
<p className="text-sm ">+91 1234567890</p>

</div>
<div className="flex items-center ">
<MdEmail />
<p className="text-sm ">abc@gmail.com</p>
</div>
</div>

{/* Social MEdia Icons */}
<div>
<Socials containerStyle=" flex gap-4 px-10" iconStyle="w-7 h-7 border border-accent rounded-full flex justify-center items-center text-wite text-base hover:bg-white hover:text-gray-900 hover:transition-all duration-500" ></Socials>
</div>


</div>
</div>
    )
}
export default TopNav;