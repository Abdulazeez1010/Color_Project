
import { styled } from "@mui/material/styles";

const Root = styled("div")({
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
        cursor: "pointer"
    }
});

const Colors = styled("div")({
    backgroundColor: "grey"
});

const Title = styled("h5")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
});

const Emoji = styled("span")({
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
})


function MiniPalette(palette){

    return(
        <Root>
            <Colors/>
            <Title>
                {palette.paletteName} <Emoji>{palette.emoji}</Emoji>
            </Title>
        </Root>
    )
}

export default MiniPalette;