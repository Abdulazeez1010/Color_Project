import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;

const PaletteFormNavRoot = styled("div")({
  display: "flex"
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
  flexDirection: "row",
  justifyContent: "space-between",
  height: "64px"

}));

const NavBtns = styled("div")({

})

function PaletteFormNav({open, palettes, handleDrawerOpen, handleSubmit}){

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
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                Create A Palette
                </Typography>
            </Toolbar>
            <NavBtns>
              <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} />
              <Link to="/">
                  <Button variant='contained' color='secondary'>Go Back</Button>
              </Link>
            </NavBtns>
            </AppBar>
        </PaletteFormNavRoot>
    )
}

export default PaletteFormNav;