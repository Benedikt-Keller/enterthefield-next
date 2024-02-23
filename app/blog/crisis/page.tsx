import Header from "../(components)/header"
import "../(components)/blogpage.css"
import Cell from "../(components)/cell"
import Head from 'next/head';
import Back from "../(components)/back"

export default function Page() {
    const title = "Holy Shit Im Going Thru A Crisis"

    return (
        <div className="blog-page">
            <Back/>
            <Header title={title} />
            <div className="page-content">
                <h2>{title}</h2>
                <p> Two tracks (field program, sometime 2020-2021) released on spotify, youtube and souncloud. Photos were shot by @circee (02-2024) and dir/edit by @ffield000000000000.
                </p>
                <div className="grid">
                <Cell type={"image"} imgpath={"/crisis/rack.jpg"} title={"rack"} date={"23-02-2024"} desc={"?????"} ></Cell>
                <Cell type={"image"} imgpath={"/crisis/main.jpg"} title={"cover-art"} date={"23-02-2024"} desc={"?????"} ></Cell>
                <Cell type={"image"} imgpath={"/crisis/top.png"} title={"top"} date={"23-02-2024"} desc={"?????"} ></Cell>
                </div>
            </div>

            <div className="bottom-spacer"></div>
        </div>
    )
}
