
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
        <Route path='/palette/:paletteId/:colorId' element={<h1>SINGLE COLOR PAGE</h1>}/>
      </Routes>
    </div>
  )
}

export default App
