
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import { generatePalette } from "./colorHelpers";

const PaletteRoot = styled("div")({
    height: "100vh",
    display: "flex",
    flexDirection: "column"
});

const PaletteColors = styled("div")({
    height: "90%"
})

const GoBackBox = styled("div")({
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    opacity: 1,
    backgroundColor: "black"
})

const BackButton = styled(Link)({
    color: "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none"
})

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