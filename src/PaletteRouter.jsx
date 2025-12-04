import { useParams } from 'react-router-dom';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

function PaletteRouter({palettes}){
    const {id} = useParams();
    
    const findPalette = (id) =>{
    return palettes.find(palette => palette.id === id);
  }
  return(
    <Palette palette={generatePalette(findPalette(id))} />
  )
}

export default PaletteRouter;