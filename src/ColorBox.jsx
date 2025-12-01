
import { useState } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { styled } from "@mui/material/styles";
import './ColorBox.css';

const ColorBoxDiv = styled("div")((props) => ({
    width: "20%",
    height: props.showingFullPalette ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover button": {
        opacity: "1",
        transition: "0.5s"
    }
}))
const CopyText = styled("p")((props) => ({
    color: chroma(props.background).luminance() >= 0.7 ? "black" : "white"
}))

const ColorName = styled("span")((props) => ({
    color: chroma(props.background).luminance() <= 0.08 ? "white": "black"
}))

const SeeMore = styled("span")((props) => ({
    color: chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
}))

const CopyButton = styled("button")((props) => ({
    color: chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0"
}))


function ColorBox({background, name, paletteId, id, showingFullPalette}){    
    const [copied, setCopied] = useState(false)

    const copyText = () => {
        navigator.clipboard.writeText(background);
        changeCopyState();
    };

    const changeCopyState = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return(
        <ColorBoxDiv
            onClick={copyText}
            style={{background: background}}
            showingFullPalette = {showingFullPalette}
        >
        <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
        <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <CopyText background={background}>{background}</CopyText>
        </div>
            <div className='copy-contianer'>
                <div className="box-content">
                    <ColorName background={background}>{name}</ColorName>
                </div>
                <CopyButton background={background}> Copy </CopyButton>
            </div>
            {showingFullPalette && (
            <Link 
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
                <SeeMore background={background}>More</SeeMore>
            </Link>)
            }
        </ColorBoxDiv>
    )
}

export default ColorBox;