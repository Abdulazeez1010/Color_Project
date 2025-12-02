
import { styled } from "@mui/material/styles";

const Root = styled("div")({
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px"
})

function DraggableColorbox({color}){
    return (
        <Root style={{backgroundColor: color}}>
            {color}
        </Root>
    )
}

export default DraggableColorbox;