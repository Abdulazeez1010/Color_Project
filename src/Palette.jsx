import { useState } from "react";
import { styled } from "@mui/material/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

const PaletteRoot = styled("div")({
    height: "100vh",
    display: "flex",
    flexDirection: "column"
});

const PaletteColors = styled("div")({
    height: "90%"
})

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
          showingFullPalette
        />
    ))
    const changeLevel = (level) =>{
        setLevel(level);
    }
    const changeFormat = (val) => {
        setFormat(val)
    }
    return(
        <PaletteRoot>
            <Navbar
              level={level}
              changeLevel={changeLevel}
              handleChange={changeFormat}
              showingAllColors
            />
            <PaletteColors>{colorBoxes}</PaletteColors>
            <PaletteFooter palette={palette}/>
        </PaletteRoot>
    )
}

export default Palette;