import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{padding: '2rem'}}>
      <Link href="/blog" style={{textDecoration: 'none'}}>
        <h1>Blog</h1>
      </Link>
    </div>
    
  )
}
