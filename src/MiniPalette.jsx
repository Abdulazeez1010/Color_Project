
import { Root, Colors, Title, Emoji, MiniColor } from "./styles/MiniPaletteStyles";
import DeleteIcon from '@mui/icons-material/Delete';

function MiniPalette({paletteName, emoji, colors, handleClick, openDialog, id, ref}){
    const miniColorBoxes = colors.map(color => (
        <MiniColor
          style={{backgroundColor: color.color}}
          key={color.name}
        />
    ));

    const deletePalette = (e) => {
        e.stopPropagation();
        openDialog(id);
    }

    return(
        <Root onClick={handleClick} ref={ref}>
                <DeleteIcon
                  sx={{
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
                  }}
                  onClick={deletePalette}
                />
            <Colors>{miniColorBoxes}</Colors>
            <Title>
                {paletteName} <Emoji>{emoji}</Emoji>
            </Title>
        </Root>
    )
}

export default MiniPalette;