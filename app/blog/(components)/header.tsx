
import "./blogpage.css"
import { IoMdClose } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import Link from 'next/link';



interface HeaderProps {
    title: string;
}


export default function Header( {title}: HeaderProps) {
    return (
        <div className="header">
            <div className="directory">
                <Link href={"/blog"} style={{textDecoration:'none'}}>
                <h4>Field Program /  </h4>
                </Link>
                <h3>{title} </h3>
            </div>
            <Link href={"/blog"} style={{paddingRight: '1rem'}}>
                <TfiClose className="icon" />
            </Link>
        </div>
        
    )
}