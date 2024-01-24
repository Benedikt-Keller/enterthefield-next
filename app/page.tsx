import Image from 'next/image'
import Link from 'next/link'
import './landing.css'

export default function Home() {
  return (
    <div style={{backgroundColor: 'white', overflow: 'hidden'}}>
        <h1 style={{zIndex: '200', position: 'fixed', display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '0.5rem', color: 'black'}}>
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
        
        <h1 style={{zIndex: '200', position: 'fixed', display: 'flex', width: '100%', justifyContent: 'center', bottom: '0', paddingBottom: '0.5rem', color: 'black'}}>
          the field
        </h1>
        <p style={{zIndex: '200', position: 'fixed', display: 'flex', width: '100%', justifyContent: 'center', bottom: '70px', paddingBottom: '0.5rem', paddingLeft: '0rem', color: 'rgb(210,210,210)', fontSize: '0.75rem'}}>
          artwork by @sam_seurynck
        </p>
      </div>

      <img src='original_64d92446026a5b2414276869cd6fe440_3.gif' className='backdrop' style={{maxWidth: '1000px'}}>
      </img>
    </div>
  
    
  )
}
