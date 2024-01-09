'use client'
import '../blog.css'
import Link from 'next/link';
import { ReactNode } from 'react';
import React from 'react';

interface CellProps {
    type: string;
    imgpath: string;
    posttitle?: string;
    title: string;
    date: string;
    desc: string;
}

export default function Cell({ imgpath, title, desc, date, type, posttitle }: CellProps) {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

    const FullSizeImage = (): ReactNode => {
        return (
            <div className='fullsizecontainer'>
                <div className='fullimgcontainer'>
                    <img src={imgpath} alt={title} className='fullimg' />
                    <button className='fullimgbutton' onClick={toggleVisibility}>Close</button>
                </div>
            </div>
        );
    };

    if (type == 'image') {
        return (
            <>
            {isVisible && <FullSizeImage/>}
                <div className='cell' onClick={toggleVisibility}>
                    <div className='imgcontainer'>
                        <img src={imgpath} alt={title} className='img' />
                    </div>
                    <h5 className='title'>{title}</h5>
                    <div className='subtitle'>
                        <h5>{desc} - {date}</h5>
                    </div>
                </div>
            </>
        )
    }
    if (type == 'post') {
        return (
            <Link href={`/blog/${posttitle}`} style={{ textDecoration: 'none' }}>
                <div className='cell'>
                    <div className='imgcontainer'>
                        <img src={imgpath} alt={title} className='img' />
                    </div>
                    <h5 className='title'>{title}</h5>
                    <div className='subtitle'>
                        <h5>{desc} </h5>
                        <h5>{date} </h5>
                    </div>

                </div>
            </Link>
        )
    }
}