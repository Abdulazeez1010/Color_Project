import { useState } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import PaletteMetaForm from './PaletteMetaForm';
import {
  PaletteFormNavRoot,
  AppBar,
  NavBtns,
  StyledButton
} from './styles/PaletteFormNavStyles';

function PaletteFormNav({open, palettes, handleDrawerOpen, handleSubmit}){

  const [formShowing, setFormShowing] = useState(false)

  const showForm = () => {
    setFormShowing(true)
  }

  const hideForm = () => {
    setFormShowing(false)
  }

    return(
        <PaletteFormNavRoot>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default'>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                    {
                    mr: 2,
                    },
                    open && { display: 'none' },
                ]}
                >
                <AddToPhotosIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                Create A Palette
                </Typography>
            </Toolbar>
            <NavBtns>
              <Link to="/">
                  <StyledButton variant='contained' color='secondary'>
                      Go Back
                  </StyledButton>
              </Link>
              <StyledButton variant="contained" onClick={showForm}>
                Save
              </StyledButton>
            </NavBtns>
            </AppBar>
            {formShowing && (
              <PaletteMetaForm
                palettes={palettes}
                handleSubmit={handleSubmit}
                hideForm={hideForm}
              />
            )}
        </PaletteFormNavRoot>
    )
}

export default PaletteFormNav;