
import { styled } from "@mui/material/styles";

export const Root = styled("div")({
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    // overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
        opacity: 1
    }
});

export const Colors = styled("div")({
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
});

export const Title = styled("h5")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
});

export const Emoji = styled("span")({
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
});

export const MiniColor = styled("div")({
    height:"25%",
    width:"20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-5px"
});