
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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

    const _shades = gatherShades(findPalette(paletteId), colorId);

    const colorBoxes = _shades.map(color =>(
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showingFullPalette={false}
        />
    ))

    return(
        <div className="SingleColorPalette Palette">
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <div className="Palette-colors">
                {colorBoxes}
                <div className="go-back ColorBox">
                    <Link to={`/palette/${paletteId}`} className="back-button">GO BACK</Link>
                </div>
            </div>
            <PaletteFooter palette={findPalette(paletteId)}/>
        </div>
    )
}

export default SingleColorPalette;