import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import DraggableColorbox from './DraggableColorBox';
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
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function NewPaletteForm({savePalette, palettes}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setCurrentColor] = React.useState("teal");
  const [colors, setColors] = React.useState([{color: "blue", name: "blue"}]);
  const [newColorName, setNewColorName] = React.useState("");
  const [newPaletteName, setNewPaletteName] = React.useState("");

  const navigate = useNavigate();

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
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
        palettes.every(
            ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        )
    );
  })

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

  const handleSubmit = () => {
    let newName = newPaletteName
    const newPalette = {
        paletteName: newName,
        id: newName.toLowerCase().replace(/ /g, "-"),
        colors: colors
    }
    savePalette(newPalette);
    navigate("/")
  }

  const removeColor = (colorName) => {
    setColors(colors.filter(color => color.name !== colorName))
  }

  return (
    <Box sx={{ display: 'flex' }}>
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
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name='newPaletteName'
              onChange={handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already used"]}
            />
            <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
            <Button variant='contained' color='error'>Clear Palette</Button>
            <Button variant='contained' color='primary'>Random Color</Button>
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
              style={{backgroundColor: currentColor}}
              type='submit'
            >
                Add Color
            </Button>
        </ValidatorForm>
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
            {colors.map(color => (
                <DraggableColorbox
                  key={color.name}
                  color={color.color}
                  name={color.name}
                  handleClick={() => removeColor(color.name)}
                />
            ))}
      </Main>
    </Box>
  );
}

export default NewPaletteForm;