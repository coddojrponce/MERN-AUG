import './App.css';
import Nav from './components/Nav'
import All from './components/All'
import One from './components/One'
import Footer from './components/Footer'
import {useState} from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'


function App() {

  const [state,setState] = useState()
  const [cardView,setCardView] = useState(false)


  return (
    <div className="App">
      <Nav/>
      <All state = {state} setState={setState} />
      <One cardView={cardView} setCardView = {setCardView}  state = {state} setState={setState}/>
      <Footer/>
    </div>
  );
}

export default App;
