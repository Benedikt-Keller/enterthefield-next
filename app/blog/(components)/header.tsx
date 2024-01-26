
import "./blogpage.css"
import { IoMdClose } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";



interface HeaderProps {
    title: string;
}


export default function Header( {title}: HeaderProps) {
    return (
        <div className="header">
            <div className="directory">
                <Link href={"/blog"} style={{textDecoration:'none', display:'flex', gap:'0.5rem', alignItems:'center'}}>
                    <h4>Field Program /  </h4>
                </Link>
                <h3>{title} </h3>
            </div>
            <Link href={"/blog"} style={{paddingRight: '1rem', display:'none'}}>
                <TfiClose className="icon" />
            </Link>
        </div>
        
    )
}