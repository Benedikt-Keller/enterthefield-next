
'use client'
import '../blog/blog.css'
import './music.css'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='page'>
             <div className='blog-header'>
                <h3>FFIELD</h3>
                <h4>Music</h4>
            </div>
            <div className='link-grid'>
                    <Link href={'https://open.spotify.com/intl-de/artist/5jIdvJoSpBBsXUWwfoZgGm?si=Pq3JdWeJTe6MVaRYMy3OyA'} style={{textDecoration: 'none'}} className='link-1'> 
                            <img src='/links/Spotify_logo_without_text_gray.svg' className='logo-base'></img>
                    </Link>

                    <Link href={'https://soundcloud.com/user-983034856?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} style={{textDecoration: 'none'}} className='link-2'>  
                        <img src='/links/soundcloud-svgrepo-com.svg' className='logo'></img>
                        <img src='/links/soundcloud-svgrepo-com.svg' className='logo-bw'></img>
                    </Link>

                    <Link href={'https://soundcloud.com/user-983034856?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} style={{textDecoration: 'none'}} className='link-3'>  
                        <img src='/links/youtube-svgrepo-com.svg' className='logo-base'></img>
                    </Link>

                    <Link href={'https://soundcloud.com/user-983034856?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} style={{textDecoration: 'none'}} className='link-4'>  
                        <img src='/links/Apple_Music_logo.svg' className='logo'></img>
                        <img src='/links/Apple_Music_logo.svg' className='logo-bw'></img>
                    </Link>
                    
            </div>
            
        </div>
    )
}