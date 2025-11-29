
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import { generatePalette } from "./colorHelpers";

function SingleColorPalette({palettes}){
    
    const {paletteId} = useParams();
    const {colorId} = useParams();
    const [format, setFormat] = useState("hex");

    const findPalette = (paletteId) => {
        return generatePalette(palettes.find(p => p.id === paletteId))
    }
    // console.log(colorId)

    const gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }

    const changeFormat = (val) => {
        setFormat(val)
    }

    const _shades = gatherShades(findPalette(paletteId), colorId)
    // console.log(_shades);

    const colorBoxes = _shades.map(color =>(
        // console.log(format)
        <ColorBox
          key={color.id}
          name={color.name}
          background={color[format]}
          showLink={false}
        />
    ))

    return(
        <div className="Palette">
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            {/* {console.log(findPalette(paletteId))} */}
            <PaletteFooter palette={findPalette(paletteId)}/>
        </div>
    )
}

export default SingleColorPalette;