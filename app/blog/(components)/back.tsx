import Link from 'next/link'
import "./blogpage.css"

export default function Back() {
    return (
        <Link href={'../'} style={{position: 'fixed', textDecoration:'none', width:'300px', height: '82px', bottom:'1rem', display:'flex', alignItems:'center', justifyContent:'center'}} className='back-button'>
           <h3> Back </h3>
        </Link>
            
    )
}