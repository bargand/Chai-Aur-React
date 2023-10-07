import './App.css'
import Myname from './components/Myname'

function App() {

  return (
    <>
    <Myname NewName={"Debargha Nandi"}/>
    <Myname NewName={"Riya Pandit"}/>
    <Myname NewName={"Debargha"} NewLastName={ "Nandi"}/>
    <Myname NewName={"Riya"} NewLastName={ "Pandit"}/>
    <Myname/>
    </>
  )
}

export default App
