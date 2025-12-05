import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import { arrayMove } from '@dnd-kit/sortable';
import PaletteFormNav from './PaletteFormNav';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function NewPaletteForm({maxColors = 20, savePalette, palettes}) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setCurrentColor] = React.useState("teal");
  const [colors, setColors] = React.useState(palettes[0].colors);
  const [newColorName, setNewColorName] = React.useState("");

  const navigate = useNavigate();

  const paletteIsFull = colors.length >= maxColors;

  React.useEffect( () => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
        colors.every(
            ({name}) => name.toLowerCase() !== value.toLowerCase()
        )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) => 
        colors.every(
            ({color}) => color !== currentColor
        )
    );
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex)
  }

  const addNewColor = () => {
    const newColor = {
        color: currentColor,
        name: newColorName
    }
    setColors([...colors, newColor]);
    setNewColorName("")
  }

  const handleChange = (evt) => {
    const {name, value} = evt.target
    if (name === "newColorName") setNewColorName(value);
    if (name === "newPaletteName") setNewPaletteName(value);
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

  const handleSubmit = (newPaletteName) => {
    const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, "-"),
        colors: colors
    }
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
          },
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
        <Typography variant='h4'>Design Your Palette</Typography>
        <div>
            <Button
              variant='contained'
              color='error'
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addNewColor}>
            <TextValidator 
              value={newColorName}
              name='newColorName'
              onChange={handleChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]} 
              errorMessages ={[
                "Enter a color name",
                "Color name must be unique",
                "Color already used"
            ]}
            />
            <Button
              variant='contained'
              color='primary'
              style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
              disabled={paletteIsFull}
              type='submit'
            >
                {paletteIsFull ? "Palette Full" : "Add Color"}
            </Button>
        </ValidatorForm>
        
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