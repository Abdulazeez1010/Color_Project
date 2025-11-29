
import { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";
import { generatePalette } from "./colorHelpers";

function SingleColorPalette({palettes}){
    
    const {paletteId} = useParams();
    const {colorId} = useParams();

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

    const _shades = gatherShades(findPalette(paletteId), colorId)
    // console.log(_shades);

    const colorBoxes = _shades.map(color =>(
        <ColorBox
          key={color.id}
          name={color.name}
          background={color.hex}
          showLink={false}
        />
    ))

    return(
        <div className="Palette"> 
            <h1>Single Color Palette</h1>
            <div className="Palette-colors">
                {colorBoxes}
            </div>
        </div>
    )
}

export default SingleColorPalette;