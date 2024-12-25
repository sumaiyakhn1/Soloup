import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";



const Socials=({containerStyle,iconStyle})=>{

    const Social=[
        { icons:<FaFacebookF/>,path:''},
        { icons:<FaTwitter/>,path:''},
        { icons:<FaInstagram/>,path:''},
        { icons:<FaLinkedin/>,path:''},
    ]
    return(
        <div className={containerStyle}>
            {
                Social.map((item,index)=>{
                    return <Link key={index} className={iconStyle} href={item.path}>{item.icons}</Link>

                })
            }

        </div>

    )
}

export default Socials;