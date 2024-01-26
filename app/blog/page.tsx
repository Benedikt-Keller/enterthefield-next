import './blog.css'
import Cell from './(components)/cell'
import { IoIosArrowRoundBack } from "react-icons/io";
import Back from './(components)/back';


export default function Page() {
    const posts = [
        {
            imgpath: "/untitled/untitledgif.gif",
            title: "untitled series",
            desc: "untitled series",
            date: '??-08-2022',
            type: 'post',
            posttitle: 'untitled'
        }
    ]

    return (
        <div className='page'>
            <Back/>
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