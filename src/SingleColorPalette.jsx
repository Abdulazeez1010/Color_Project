
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import { generatePalette } from "./colorHelpers";

import { 
    PaletteRoot,
    PaletteColors,
    GoBackBox,
    BackButton 
} from "./styles/PaletteStyles";


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
        <PaletteRoot>
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <PaletteColors>
                {colorBoxes}
                <GoBackBox>
                    <BackButton to={`/palette/${paletteId}`}>GO BACK</BackButton>
                </GoBackBox>
            </PaletteColors>
            <PaletteFooter palette={findPalette(paletteId)}/>
        </PaletteRoot>
    )
}

export default SingleColorPalette;