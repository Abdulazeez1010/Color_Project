import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PaletteRouter from './PaletteRouter';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css'
import seedColors from './seedColors';

function App() {

  const [palettes, setPalette] = useState(seedColors);


  const savePalette = (newPalette) => {
    setPalette([...palettes, newPalette])
  }
  
  return (
    <div>
      <Routes>
        <Route 
          path="/palette/new" 
          element={
            <NewPaletteForm palettes={palettes} savePalette={savePalette}/>
          }
        />
        <Route path='/' element={<PaletteList palettes={palettes}/>}/>
        <Route path='/palette/:id' element={<PaletteRouter palettes={palettes}/>}/>
        <Route 
          path='/palette/:paletteId/:colorId'
          element={<SingleColorPalette palettes={palettes}/>}
        />
      </Routes>
    </div>
  )
}

export default App
