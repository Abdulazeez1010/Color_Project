import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import { arrayMove } from '@dnd-kit/sortable';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';
import { 
  drawerWidth,
  Main,
  DrawerHeader,
  Container,
  Buttons 
} from './styles/NewPaletteFormStyles';

function NewPaletteForm({maxColors = 20, savePalette, palettes}) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [colors, setColors] = React.useState(palettes[0].colors);

  const navigate = useNavigate();

  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  }

  const clearColors = () => {
    setColors([]);
  }

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  }

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
    newPalette.colors = colors
    savePalette(newPalette);
    navigate("/")
  }

  const removeColor = (colorName) => {
    setColors(colors.filter(color => color.name !== colorName))
  }

  const handleDragEnd = (event) => {
    const {active, over} = event;

    if (!over || active.id === over.id) return;

    const oldIndex = colors.findIndex(c => c.name === active.id);
    const newIndex = colors.findIndex(c => c.name === over.id);
        
    setColors((items) => arrayMove(items, oldIndex, newIndex));  
}

  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
      />  
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
             display: "flex",
          alignItems: "center"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Container>
          <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
          <Buttons>
              <Button
                variant='contained'
                color='error'
                onClick={clearColors}
                sx={{width: "50%"}}
              >
                Clear Palette
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={addRandomColor}
                disabled={paletteIsFull}
                sx={{width: "50%"}}
              >
                Random Color
              </Button>
          </Buttons>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            colors={colors}
            addNewColor={addNewColor}
          />
        </Container>
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
          <DraggableColorList 
            colors={colors}
            handleDragEnd={handleDragEnd}
            removeColor={removeColor}
          />
      </Main>
    </Box>
  );
}

export default NewPaletteForm;