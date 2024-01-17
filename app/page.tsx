import Image from 'next/image'
import Link from 'next/link'
import './landing.css'

export default function Home() {
  return (
    <div style={{backgroundColor: 'white', overflow: 'hidden'}}>
        <h1 style={{zIndex: '200', position: 'fixed', display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '0.5rem'}}>
          enter
        </h1>
        <div style={{zIndex: '2000', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column', height: '100vh', overflow: 'hidden'}}>
          <div className='panel-container' style={{overflow:'hidden'}}>
          <Link href="/blog" style={{textDecoration: 'none'}} className='panel'>
              <h5 className='panel-title'>blog</h5>
          </Link>

          <Link href="/music" style={{textDecoration: 'none'}} className='panel'>        
              <h5 className='panel-title'>music</h5>
          </Link>
          </div>
        
        <h1 style={{zIndex: '200', position: 'fixed', display: 'flex', width: '100%', justifyContent: 'center', bottom: '0', paddingBottom: '0.5rem'}}>
          the field
        </h1>
      </div>

      <img src='original_64d92446026a5b2414276869cd6fe440_3.gif' className='backdrop' style={{maxWidth: '1000px'}}>
      </img>
    </div>
  
    
  )
}
