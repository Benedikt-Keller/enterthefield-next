import blog from './blog.module.css'
import Image from 'next/image';

interface CellProps {
    imgpath: string;
    title: string;
    date: string;
    desc: string;
  }

export default function Cell({imgpath, title, desc, date}: CellProps) {
    return (
        <div className={blog.cell}>
            <div className={blog.imgcontainer}>
                <img src={imgpath} alt={title} className={blog.img}/>
            </div>
            <h5 className={blog.title}>{title}</h5>
            <div className={blog.subtitle}>
                <h5>{desc} </h5>
                <h5>{date} </h5>
            </div>
           
        </div>
        
    )
}