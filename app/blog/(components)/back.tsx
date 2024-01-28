import Link from 'next/link'
import "./blogpage.css"
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Back() {
    return (
        <Link href={'./'} 
        style={{
        position: 'fixed', 
        textDecoration:'none', 
        bottom:'0.5rem', 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'flex-start',
        paddingLeft: '1rem',
        gap: '0.5rem',
    }} 
        className='back-button'>
            
            <IoIosArrowRoundBack 
            style={{
            color:'rgb(0,0,0)',
            width: '1.5rem',
            height: '1.5rem'
            }} />

        <h3 style={{color:'rgb(var(--background-start-rgb), 0.8)'}}>Back</h3>

        </Link>
            
    )
}