import blog from './blog.module.css'
import Cell from './cell'


export default function Page() {
    return (
        <div className={blog.page}>
            <h1>Field Program</h1>
                <div className={blog.grid}>
                    <Cell imgpath="/IMG_2306.PNG" title="IMG_2306.PNG" desc="This is the first field progra2m" date='03.01.2024'/>
                    <Cell imgpath="/dot.jpg" title="dot.jpg" desc="This is the first field progra2m" date='03.01.2024'/>
                    <Cell imgpath="/Styrofoam.jpg" title="Styrofoam.jpg" desc="This is the first field progra2m" date='03.01.2024'/>
                    <Cell imgpath="/room.png" title="room.png" desc="This is the first field progra2m" date='03.01.2024'/>
                </div>
        </div>
        
    )
}