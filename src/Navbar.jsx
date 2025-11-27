
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import './Navbar.css'

function Navbar({level, changeLevel, handleChange}){
    const [format, setFormat] = useState("hex");

    const handleChangeFormat = (e) =>{
        setFormat(e.target.value);
        handleChange(e.target.value)
    }

    return(
        <header className="Navbar">
            <div className="logo">
                <a href="#">reactcolorpicker</a>
            </div>
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
            </div>
            <div className="select-container">
                <Select value={format} onChange={handleChangeFormat}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
        </header>
    )
}

export default Navbar;