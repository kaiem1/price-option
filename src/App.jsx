
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOption from './components/PriceOption/PriceOption'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
 

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOption></PriceOption>
      <LineChart></LineChart>
     
    </>
  )
}

export default App
