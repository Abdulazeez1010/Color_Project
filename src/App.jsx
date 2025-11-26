import Palette from './Palette'
import seedColors from './seedColors'
import './App.css'

function App() {

  return (
    <div>
      <Palette {...seedColors[2]}/>
    </div>
  )
}

export default App
