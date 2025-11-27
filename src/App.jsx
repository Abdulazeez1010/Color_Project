
import { Route, Routes } from 'react-router-dom';
import PaletteRouter from './PaletteRouter';
import PaletteList from './PaletteList';
import './App.css'
import seedColors from './seedColors';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors}/>}/>
        <Route path='/palette/:id' element={<PaletteRouter/>}/>
      </Routes>
      {/* <div>
        <Palette palette={generatePalette(seedColors[4])}/>
      </div> */}
    </div>
  )
}

export default App
