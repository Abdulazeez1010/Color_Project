
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

function PaletteList({palettes}){
    return(
        <div>
            <h1>Palette List</h1>
            {palettes.map(palette => (
                <MiniPalette {...palette}/>
                ))}
        </div>
    )
}

export default PaletteList;