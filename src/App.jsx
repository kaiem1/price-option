
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOption from './components/PriceOption/PriceOption'

function App() {
 

  return (
    <>
      <NavBar></NavBar>
      
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
     
    </>
  )
}

export default App
