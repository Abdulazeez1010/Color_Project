
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import { 
    NavbarRoot,
    NavbarLogo,
    NavbarLogoLink,
    NavbarSlider,
    NavbarSelectContainer
} from './styles/NavbarStyles';

function Navbar({level, changeLevel, handleChange, showingAllColors}){
    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);

    const handleFormatChange = (e) =>{
        setFormat(e.target.value);
        setOpen(true);
        handleChange(e.target.value);
    }

    const closeSnackbar = () =>{
        setOpen(false);
    }

    return(
        <NavbarRoot>
            <NavbarLogo>
                <NavbarLogoLink to="/">reactcolorpicker</NavbarLogoLink>
            </NavbarLogo>
            {showingAllColors && (
            <div>
                <span>Level: {level}</span>
                <NavbarSlider>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={changeLevel}
                    />
                </NavbarSlider>
            </div>)}
            <NavbarSelectContainer>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </NavbarSelectContainer>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={closeSnackbar}
              message={<span>Format Changed to {format.toUpperCase()}</span>}
              action={[
                <IconButton
                  onClick={closeSnackbar}
                  color="inherit"
                  key="close"
                  aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
              ]}
            />
        </NavbarRoot>
    )
}

export default Navbar;