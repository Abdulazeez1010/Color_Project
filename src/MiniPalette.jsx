
import { Root, Colors, Title, Emoji, MiniColor, Delete } from "./styles/MiniPaletteStyles";
import DeleteIcon from '@mui/icons-material/Delete';

function MiniPalette({paletteName, emoji, colors, handleClick}){
    const miniColorBoxes = colors.map(color => (
        <MiniColor
          style={{backgroundColor: color.color}}
          key={color.name}
        />
    ));

    return(
        <Root onClick={handleClick} >
            <Delete>
                <DeleteIcon sx={{
                    color: "white",
                    backgroundColor: "#eb3d30",
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    padding: "10px",
                    zIndex: 10,
                    opacity: 0,
                    transition: "all 0.3s ease-in-out"
                }}/>
            </Delete>
            <Colors>{miniColorBoxes}</Colors>
            <Title>
                {paletteName} <Emoji>{emoji}</Emoji>
            </Title>
        </Root>
    )
}

export default MiniPalette;