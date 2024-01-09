import './blog.css'
import Cell from './(components)/cell'
import { IoIosArrowRoundBack } from "react-icons/io";


export default function Page() {
    const posts = [
        {
            imgpath: "/IMG_2306.PNG",
            title: "IMG_2306.PNG",
            desc: "This is the first field progra2m",
            date: '03.01.2024',
            type: 'post',
            posttitle: 'welcome'
        }
    ]

    return (
        <div className='page'>
            <div className='blog-header'>
                <h3>Field Program</h3>
                <h4>Blog</h4>
            </div>
            
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