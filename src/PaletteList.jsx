
import { useNavigate, Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { Root, Container, Nav, Palettes } from "./styles/PaletteListStyles";

function PaletteList({palettes, deletePalette}){
    const navigate = useNavigate();

    const goToPalette = (id) => {
        navigate(`/palette/${id}`);
    }

    return(
        <Root>
            <Container>
                <Nav>
                     <h1>React Colors</h1>
                     <Link to="/palette/new">Create Palette</Link>
                </Nav>
                <Palettes>
                    {palettes.map(palette => (
                        <MiniPalette
                          key={palette.id}
                          id={palette.id}
                          {...palette}
                          handleClick={() => goToPalette(palette.id)}
                          handleDelete = {deletePalette}
                        />
                        ))}
                </Palettes>
            </Container>
        </Root>
    )
}

export default PaletteList;