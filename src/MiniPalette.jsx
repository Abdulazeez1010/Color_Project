
import { Root, Colors, Title, Emoji, MiniColor } from "./styles/MiniPaletteStyles";


function MiniPalette({paletteName, emoji, colors, handleClick}){
    const miniColorBoxes = colors.map(color => (
        <MiniColor style={{backgroundColor: color.color}} key={color.name}></MiniColor>
    ))

    return(
        <Root onClick={handleClick} >
            <Colors>{miniColorBoxes}</Colors>
            <Title>
                {paletteName} <Emoji>{emoji}</Emoji>
            </Title>
        </Root>
    )
}

export default MiniPalette;