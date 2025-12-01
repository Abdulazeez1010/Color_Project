import chroma from 'chroma-js';
import { styled } from "@mui/material/styles";


export const ColorBoxDiv = styled("div")((showingFullPalette) => ({
    width: "20%",
    height: showingFullPalette ? "25%" : "50%",
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

export const CopyText = styled("p")(({background}) => ({
    color: chroma(background).luminance() >= 0.7 ? "black" : "white"
}))

export const ColorName = styled("span")(({background}) => ({
    color: chroma(background).luminance() <= 0.08 ? "white": "black"
}))

export const SeeMore = styled("span")(({background}) => ({
    color: chroma(background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
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

export const CopyButton = styled("button")(({background}) => ({
    color: chroma(background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
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

export const BoxContent = styled("div")({
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
})

export const CopyOverlay = styled("div")(({copied, background}) => ({
    background,
    opacity: copied ? 1 : 0,
    zIndex: copied ? 10 : 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "transform 0.6s ease-in-out",
    transform: copied ? "scale(50)" : "scale(0.1)"
}))

export const CopyMessage = styled("div")(({copied, background}) => ({
    color: chroma(background).luminance() >= 0.7 ? "black" : "white",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: copied ? "scale(1)" : "scale(0.1)",
    opacity: copied ? 1 : 0,
    zIndex: copied ? 25 : 0,
    transition: copied ? "all 0.4s ease-in-out" : "",
    transitionDelay: copied ? "0.3s" : "",
    "& h1": {
        fontWeight: 400,
        textShadow: "1px 2px black",
        background: "rgba(255, 255, 255, 0.2)",
        width: "100%",
        textAlign: "center",
        marginBottom: 0,
        padding: "1rem",
        textTransform: "uppercase"
    },
    "& p": {
        fontSize: "2rem",
        fontWeight: 100
    }
}))