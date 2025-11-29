import { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

function Palette({palette}){
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");

    const colorBoxes = palette.colors[level].map(color => (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          id={color.id}
          paletteId={palette.id}
          showLink={true}
        />
    ))
    const changeLevel = (level) =>{
        setLevel(level);
    }
    const changeFormat = (val) => {
        setFormat(val)
    }
    return(
        <div className="Palette">
            <Navbar
              level={level}
              changeLevel={changeLevel}
              handleChange={changeFormat}
              showingAllColors
            />
            <div className="Palette-colors">{colorBoxes}</div>
            <PaletteFooter palette={palette}/>
        </div>
    )
}

export default Palette;