
import { useNavigate } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { Root, Container, Nav, Palettes } from "./styles/PaletteListStyles";

function PaletteList({palettes}){
    const navigate = useNavigate();

    const goToPalette = (id) => {
        navigate(`/palette/${id}`);
    }

    return(
        <Root>
            <Container>
                <Nav>
                     <h1>React Colors</h1>
                </Nav>
                <Palettes>
                    {palettes.map(palette => (
                        <MiniPalette
                          key={palette.id}
                          {...palette}
                          handleClick={() => goToPalette(palette.id)}
                        />
                        ))}
                </Palettes>
            </Container>
        </Root>
    )
}

export default PaletteList;