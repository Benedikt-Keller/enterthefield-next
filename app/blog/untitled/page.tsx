
import Header from "../(components)/header"
import "../(components)/blogpage.css"
import Cell from "../(components)/cell"
import Head from 'next/head';
import Back from "../(components)/back"

export default function Page() {
    const title = "untitled"

    return (
        <div className="blog-page">
            <Back></Back>
            <Header title={title} />
            <div className="page-content">
                <h2>{title}</h2>
            

                <p> Collection of images (part of a daily sketch routine), depecting everything
                    and nothing - created sometime 2022
                    <br/>
                    <br/>
                    
                </p>

                <div className="block-seperator"></div>

                <p> 001, 002 & 006 </p>

                <div className="grid">
                    <Cell type={"image"} imgpath={"/untitled/unknown.png"} title={"001"} date={"08-2022"} desc={"?????"} ></Cell>
                    <Cell type={"image"} imgpath={"/untitled/IMG_1432.jpg"} title={"002"} date={"08-2022"} desc={"?????"} ></Cell>
                    <Cell type={"image"} imgpath={"/untitled/IMG_1403.jpeg"} title={"006"} date={"08-2022"} desc={"?????"} ></Cell>
                </div>

                <div className="block-seperator"></div>
                
                <p> 009, 012 & ??? </p>

                <div className="grid">
                    <Cell type={"image"} imgpath={"/untitled/41ECA181-5359-4A3F-8EBF-D7BCE83D63AF.jpeg"} title={"009"} date={"08-2022"} desc={"?????"} ></Cell>
                    <Cell type={"image"} imgpath={"/untitled/IMG_1445.jpg"} title={"012"} date={"08-2022"} desc={"?????"} ></Cell>
                    <Cell type={"image"} imgpath={"/untitled/IMG_1456.jpg"} title={"???"} date={"08-2022"} desc={"?????"} ></Cell>
                </div>

                <div className="block-seperator"></div>

                <p> 008 & 011 </p>

                <div className="grid">
                    <Cell type={"image"} imgpath={"/untitled/IMG_1437.jpg"} title={"008"} date={"08-2022"} desc={"?????"} ></Cell>
                    <Cell type={"image"} imgpath={"/untitled/IMG_1453.jpg"} title={"011"} date={"08-2022"} desc={"?????"} ></Cell>
                </div>

                <p> 
                <br/>
                <br/>
                </p>
                
                <div className="block-seperator"></div>

                <p> © field program 2024 </p>

                <div className="bottom-spacer"></div>

            </div>
        </div>
        
    )
}