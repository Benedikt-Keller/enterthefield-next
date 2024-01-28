
'use client'
import Back from '../blog/(components)/back'
import '../blog/blog.css'
import './music.css'
import Link from 'next/link'
import { useEffect } from 'react'


export default function Page() {
    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(var(--background-start-rgb))'
    })

    return (
        <div className='page'>
            <Back></Back>
             <div className='music-header'>
                <h3 style={{paddingLeft: '1rem'}}>FFIELD</h3>
                <h4 style={{paddingRight: '1rem'}}>Music</h4>
            </div>
            <div className='link-grid-container'>
                <img src='/music/pb.png' className='link-img'></img>
            <div className='link-grid'>
                
                    <Link href={'https://open.spotify.com/intl-de/artist/5jIdvJoSpBBsXUWwfoZgGm?si=Pq3JdWeJTe6MVaRYMy3OyA'} style={{textDecoration: 'none'}} className='link'> 
                        <div className='link-content'>
                            <div className='link-container'>
                                <img src='/music/sp.svg'></img>
                                <h4 className='link-text'> Spotify</h4>
                            </div>
                            <img src='/music/link.svg' className='link-logo'></img>
                        </div>
                    </Link>

                    <Link href={'https://youtube.com/@fieldprogram?si=GMzYNCPBNgyp0DfZ'} style={{textDecoration: 'none'}} className='link'>  
                        <div className='link-content'>
                            <div className='link-container'>
                                <img src='/music/yt.svg'></img>
                                <h4 className='link-text'> YouTube</h4>
                            </div>
                            <img src='/music/link.svg' className='link-logo'></img>
                        </div>
                    </Link>

                    <Link href={'https://soundcloud.com/user-983034856?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} style={{textDecoration: 'none'}} className='link'>  
                        <div className='link-content'>
                            <div className='link-container'>
                                <img src='/music/sc.svg'></img>
                                <h4 className='link-text'> Soundcloud</h4>
                            </div>
                            <img src='/music/link.svg' className='link-logo'></img>
                        </div>
                    </Link>

                    <Link href={'https://music.apple.com/us/artist/ffield/1468602171'} style={{textDecoration: 'none'}} className='link'>  
                        <div className='link-content'>
                            <div className='link-container'>
                                <img src='/music/ap.svg'></img>
                                <h4 className='link-text'> Apple Music</h4>
                            </div>
                            <img src='/music/link.svg' className='link-logo'></img>
                        </div>
                    </Link>
            </div>
            </div>
            

            <img src='/music/pb.png' className='background-img' style={{display:'none'}}></img>
            
        </div>
    )
}