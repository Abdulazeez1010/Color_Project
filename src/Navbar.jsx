
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import './Navbar.css'

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
        <header className="Navbar">
            <div className="logo">
                <Link to="/">reactcolorpicker</Link>
            </div>
            {showingAllColors && (
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={changeLevel}
                    />
                </div>
            </div>)}
            <div className="select-container">
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
            //   anchorOrigin={{vertical: "bottom", horizontal: "left"}}
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
        </header>
    )
}

export default Navbar;