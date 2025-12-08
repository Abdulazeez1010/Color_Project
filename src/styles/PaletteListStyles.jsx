
import { styled } from "@mui/material/styles";
import sizes from "./sizes";
import bg from "./bg.svg"

export const Root = styled("div")({
    backgroundColor: "blue",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    // background by SVGBackgrounds.com
    backgroundColor: "#394BAD",
    backgroundImage: `url(${bg})`,
    // overflow: "scroll"
});

export const Heading = styled("h1")({
    fontSize: "2rem"
});

export const Container = styled("div")({
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
        width: "80%"
    },
    [sizes.down("xs")]: {
        width: "75%"
    }
});

export const Nav = styled("nav")({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
        color: "white"
    }
});

export const Palettes = styled("div")({
    boxSizing:"border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
        gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
        gridTemplateColumns: "repeat(1, 100%)",
        gridGap: "1.4rem"
    }
});