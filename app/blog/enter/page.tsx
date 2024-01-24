import Header from "../(components)/header"
import "../(components)/blogpage.css"
import Cell from "../(components)/cell"
import Head from "next/head"

export default function Page() {
    const title = "welcome"

    return (
        <div className="blog-page">
            <Header title={title} />
            <div className="page-content">
                <h2>{title}</h2>
                <Cell type={"image"} imgpath={"/untitled/unknown.png"} title={"enter the field"} date={"22-01-2024"} desc={"?????"} ></Cell>
            </div>
        </div>
    )
}