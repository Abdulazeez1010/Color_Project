import { useNavigate, Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Root, Container, Nav, Palettes, Heading } from "./styles/PaletteListStyles";
import { createRef, useCallback, useRef, useState } from "react";
import { blue, red } from '@mui/material/colors';

function PaletteList({palettes, deletePalette}){
    const navigate = useNavigate();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deletingId, setDeletingId] = useState("");

    const openDialog = useCallback((id) => {
        setOpenDeleteDialog(true);
        setDeletingId(id);
    }, []);

    const closeDialog = () => {
        setOpenDeleteDialog(false);
        setDeletingId("");
    }

    const goToPalette = useCallback((id) => {
        navigate(`/palette/${id}`);
    }, [navigate]);

    const handleDelete = () => {
        deletePalette(deletingId);
        closeDialog()
    }

    const nodeRefs = useRef({});

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
                            if(!nodeRefs.current[palette.id]){
                                nodeRefs.current[palette.id] = createRef();
                            }
                            return (
                            <CSSTransition
                              key={palette.id}
                              nodeRef={nodeRefs.current[palette.id]}
                              timeout={500}
                              classNames="fade"
                            >
                                <MiniPalette
                                  ref={nodeRefs.current[palette.id]}
                                  {...palette}
                                  goToPalette={goToPalette}
                                  openDialog = {openDialog}
                                />
                            </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </Palettes>
            </Container>
            <Dialog
              open={openDeleteDialog}
              aria-labelledby="delete-dialog-title"
              onClose={closeDialog}
            >
                <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
                <List>
                    <ListItem>
                        <ListItemButton onClick={handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100],  color: blue[600] }}>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100],  color: red[600] }}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog>
        </Root>
    )
}

export default PaletteList;