import Header from "../(components)/header"
import "../(components)/blogpage.css"
import Cell from "../(components)/cell"
import Head from 'next/head';

export default function Page() {
    const title = "welcome"

    return (
        <div className="blog-page">
            <Header title={title} />
            <div className="page-content">
                <h2>{title}</h2>
                <p> Following on from the list of our favourite Korean brand's guide, 
                    we thought it was about time to compile a list for Japan this time. 
                    Being the pillar of style that it is and arguably being the country 
                    ith the highest expectations when it comes to quality and style, there is no 
                    surprise that there are countless amounts of brands we could add to this list
                    . One article could never do it justice. But we’ll try our best.</p>
                <div className="grid">
                    <Cell type={"image"} imgpath={"/dot.jpg"} title={"welcome"} date={"01-01-2024"} desc={"welcome"} ></Cell>
                    <Cell type={"image"} imgpath={"/dot.jpg"} title={"welcome"} date={"01-01-2024"} desc={"welcome"} ></Cell>
                    <Cell type={"image"} imgpath={"/dot.jpg"} title={"welcome"} date={"01-01-2024"} desc={"welcome"} ></Cell>
                    <Cell type={"image"} imgpath={"/dot.jpg"} title={"welcome"} date={"01-01-2024"} desc={"welcome"} ></Cell>
                </div>
            </div>
        </div>
        
    )
}