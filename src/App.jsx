
import { Route, Routes } from 'react-router-dom';
import PaletteRouter from './PaletteRouter';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import './App.css'
import seedColors from './seedColors';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors}/>}/>
        <Route path='/palette/:id' element={<PaletteRouter/>}/>
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette/>}/>
      </Routes>
    </div>
  )
}

export default App
