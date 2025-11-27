import { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

function Palette({palette}){
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");

    const colorBoxes = palette.colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name}/>
    ))
    const changeLevel = (level) =>{
        setLevel(level);
    }
    const changeFormat = (val) => {
        setFormat(val)
    }
    return(
        <div className="Palette">
            <Navbar level={level} changeLevel={changeLevel} handleChange={changeFormat}/>
            <div className="Palette-colors">
                {colorBoxes}
            </div>
        </div>
    )
}

export default Palette;