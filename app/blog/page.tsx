import './blog.css'
import Cell from './cell'


export default function Page() {
    const posts = [
        {
            imgpath: "/IMG_2306.PNG",
            title: "IMG_2306.PNG",
            desc: "This is the first field progra2m",
            date: '03.01.2024',
            type: 'post',
            posttitle: 'welcome'
        },
        {
            imgpath: "/dot.jpg",
            title: "dot.jpg",
            desc: "This is the first field progra2m",
            date: '03.01.2024',
            type: 'image'
        }
    ]

    return (
        <div className='page'>
            <h1>Field Program</h1>
                <div className='grid'>
                    <>
                        {posts.map((post) => (
                            <Cell imgpath={post.imgpath} 
                            title={post.title} 
                            desc={post.desc} 
                            date={post.date} 
                            type={post.type} 
                            posttitle={post.posttitle}/>
                        ))}
                    </>
                </div>
        </div>
        
    )
}