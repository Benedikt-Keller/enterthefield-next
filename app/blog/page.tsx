import './blog.css'
import Cell from './(components)/cell'
import { IoIosArrowRoundBack } from "react-icons/io";
import Back from './(components)/back';
import Link from 'next/link';


export default function Page() {
    const posts = [
        {
            imgpath: "/untitled/untitledgif.gif",
            title: "untitled series",
            desc: "untitled series",
            date: '22-01-2024',
            type: 'post',
            posttitle: 'untitled'
        },
        {
            imgpath: "/enter/enter.png",
            title: "enterthefield",
            desc: "welcome to the field",
            date: '22-01-2024',
            type: 'post',
            posttitle: 'enter'
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
                            key={post.title}
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