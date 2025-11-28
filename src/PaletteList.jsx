
import { styled } from "@mui/material/styles";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

const Root = styled("div")({
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  
    "&:hover": {
        cursor: "pointer"
    }
});

const Container = styled("div")({
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
});

const Nav = styled("nav")({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
});

const Palettes = styled("div")({
    boxSizing:"border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
})

function PaletteList({palettes}){
    return(
        <Root>
            <Container>
                <Nav>
                     <h1>React Colors</h1>
                </Nav>
                <Palettes>
                    {palettes.map(palette => (
                        <MiniPalette {...palette}/>
                        ))}
                </Palettes>

            </Container>
        </Root>
    )
}

export default PaletteList;