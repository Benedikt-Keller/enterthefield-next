import Header from "../(components)/header"
import "../(components)/blogpage.css"
import Cell from "../(components)/cell"
import Head from 'next/head';
import Back from "../(components)/back"
import Link from 'next/link';

export default function Page() {
    const title = "Holy Shit Im Going Thru A Crisis"

    return (
        <div className="blog-page">
            <Back/>
            <Header title={title} />
            <div className="page-content">
                <h2>{title}</h2>

                <p> Two tracks (field program, sometime 2020-2021) released on spotify, youtube and souncloud. Photos were shot by @3circee (02-2024) and dir/edit by @ffield000000000000.
                </p>

                <div className="links">
                <Link style={{color:"white"}} href={'https://open.spotify.com/album/6aDLdTZMix4Jd8Y4euaox5?si=3pluS2sbRb2Vnj9Kc7Lr8w'} > spotify </Link>
                <Link style={{color:"white"}} href={'https://youtu.be/Deq21aO5TV0?si=2nvLc-cL7jXbhIiN'} > youtube </Link>
                <Link style={{color:"white"}} href={'https://soundcloud.com/fieldprogram/sets/holy-shit-im-going-thru-a?si=0d7d6f8add5a4322a70f97d44f263732&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} > soundcloud </Link>
                </div>


                <div className="grid">
                <Cell type={"image"} imgpath={"/crisis/rack.jpg"} title={"rack"} date={"23-02-2024"} desc={"?????"} ></Cell>
                <Cell type={"image"} imgpath={"/crisis/main.jpg"} title={"cover-art"} date={"23-02-2024"} desc={"?????"} ></Cell>
                <Cell type={"image"} imgpath={"/crisis/top.png"} title={"top"} date={"23-02-2024"} desc={"?????"} ></Cell>
                </div>

                <div className="block-seperator"></div>

                <p> © field program 2024 </p>
            </div>

            <div className="bottom-spacer"></div>
        </div>
    )
}
