
import { styled } from "@mui/material/styles";

export const Root = styled("div")({
    backgroundColor: "blue",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowX: "hidden"
});

export const Container = styled("div")({
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
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
    gridGap: "5%"
});