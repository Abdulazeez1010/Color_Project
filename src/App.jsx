import { useState, useEffect, createRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PaletteRouter from './PaletteRouter';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import GlobalStyles from './styles/GlobalStyles';
import './App.css'
import seedColors from './seedColors';
import { CSSTransition, TransitionGroup } from "react-transition-group";


function App() {
  const location = useLocation();
  const nodeRef = createRef(null)

  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

  const [palettes, setPalette] = useState(savedPalettes || seedColors);

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes))
  }, [palettes]);

  const savePalette = (newPalette) => {
    setPalette(prev => [...prev, newPalette])
  }

  const deletePalette = (id) => {
    setPalette(prev => prev.filter(palette => palette.id !== id))
  }

  return (
    <>
      <GlobalStyles/>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames='fade'
          timeout={500}
          nodeRef={nodeRef}
          unmountOnExit
        >
          <div ref={nodeRef} className='page'>
            <Routes location={location}>
              <Route 
                path="/palette/new" 
                element={
                  <NewPaletteForm palettes={palettes} savePalette={savePalette}/>
                }
              />
              <Route path='/' element={<PaletteList palettes={palettes} deletePalette={deletePalette} />}/>
              <Route path='/palette/:id' element={<PaletteRouter palettes={palettes}/>}/>
              <Route 
                path='/palette/:paletteId/:colorId'
                element={<SingleColorPalette palettes={palettes}/>}
              />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App
