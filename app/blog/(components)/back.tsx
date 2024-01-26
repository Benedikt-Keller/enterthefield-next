import Link from 'next/link'
import "./blogpage.css"

export default function Back() {
    return (
        <Link href={'./'} style={{position: 'fixed', textDecoration:'none', bottom:'1rem', display:'flex', alignItems:'center', justifyContent:'center'}} className='back-button'>
           Back
        </Link>
            
    )
}