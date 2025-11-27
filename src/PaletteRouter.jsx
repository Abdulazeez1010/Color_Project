import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

function PaletteRouter(){
    const {id} = useParams();
    
    const findPalette = (id) =>{
    return seedColors.find(palette => palette.id === id);
  }
  return(
    <Palette palette={generatePalette(findPalette(id))} />
  )
}

export default PaletteRouter;