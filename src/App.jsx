
import { Route, Routes } from 'react-router-dom';
import PaletteRouter from './PaletteRouter';
import './App.css'

function App() {
  // const {id} = useParams();

  // const findPalette = (id) =>{
  //   console.log(id)
  //   return seedColors.find(palette => palette.id === id);
  // }

  return (
    <div>
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route path='/palette/:id' element={<PaletteRouter/>}/>
      </Routes>
      {/* <div>
        <Palette palette={generatePalette(seedColors[4])}/>
      </div> */}
    </div>
  )
}

export default App
