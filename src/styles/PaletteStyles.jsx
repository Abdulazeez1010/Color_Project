import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import sizes from "./sizes";

export const PaletteRoot = styled("div")({
    height: "100vh",
    display: "flex",
    flexDirection: "column"
});

export const PaletteColors = styled("div")({
    height: "90%"
})

export const GoBackBox = styled("div")({
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    opacity: 1,
    backgroundColor: "black",
    [sizes.down("lg")]: {
        width: "25%",
        height: "33.3333%"
    },
    [sizes.down("md")]: {
        width: "50%",
        height: "20%"
    },
    [sizes.down("xs")]: {
        width: "100%",
        height: "10%"
    }
})

export const BackButton = styled(Link)({
    color: "white",
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
    textDecoration: "none"
})