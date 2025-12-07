import * as React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Button from '@mui/material/Button';
import PaletteMetaForm from './PaletteMetaForm';
import { PaletteFormNavRoot, AppBar, NavBtns } from './styles/PaletteFormNavStyles';

function PaletteFormNav({open, palettes, handleDrawerOpen, handleSubmit}){

  const [formShowing, setFormShowing] = React.useState(false)

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
                  <Button variant='contained' color='secondary' sx={{margin: "0 0.5rem"}}>Go Back</Button>
              </Link>
              <Button variant="contained" onClick={showForm} sx={{margin: "0 0.5rem"}}>
                Save
              </Button>
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