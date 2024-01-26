import Header from "../(components)/header"
import "../(components)/blogpage.css"
import Cell from "../(components)/cell"
import Head from "next/head"
import Back from "../(components)/back"

export default function Page() {
    const title = "welcome"

    return (
        <div className="blog-page">
            <Back/>
            <Header title={title} />
            <div className="page-content">
                <h2>{title}</h2>
                <Cell type={"image"} imgpath={"/enter/enter.png"} title={"enter the field"} date={"22-01-2024"} desc={"?????"} ></Cell>
            </div>
        </div>
    )
}