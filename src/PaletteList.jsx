import { useNavigate, Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Root, Container, Nav, Palettes, Heading } from "./styles/PaletteListStyles";
import { createRef } from "react";

function PaletteList({palettes, deletePalette}){
    const navigate = useNavigate();

    const goToPalette = (id) => {
        navigate(`/palette/${id}`);
    }

    return(
        <Root>
            <Container>
                <Nav>
                     <Heading>React Colors</Heading>
                     <Link to="/palette/new">Create Palette</Link>
                </Nav>
                <Palettes>
                    <TransitionGroup component={null} >
                        {palettes.map(palette => {
                            const nodeRef = createRef(null)
                            return (
                            <CSSTransition
                              key={palette.id}
                              nodeRef={nodeRef}
                              timeout={500}
                              classNames="fade"
                            >
                                <MiniPalette
                                  ref={nodeRef}
                                  {...palette}
                                  handleClick={() => goToPalette(palette.id)}
                                  handleDelete = {deletePalette}
                                />
                            </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </Palettes>
            </Container>
        </Root>
    )
}

export default PaletteList;