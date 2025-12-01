
import { PaletteFooterRoot, PaletteEmoji } from "./styles/PaletteFooterStyles";

function PaletteFooter({palette}){
    return(
        <PaletteFooterRoot>
            {palette.paletteName}
            <PaletteEmoji>{palette.emoji}</PaletteEmoji>
        </PaletteFooterRoot>
    )
}

export default PaletteFooter;