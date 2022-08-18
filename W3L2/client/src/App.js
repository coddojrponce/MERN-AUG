import logo from './static/logo.png';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'
import View from './components/View'
import Footer from './components/Footer'
import {useState} from 'react'

function App() {

  const [view,setView] = useState(false)
  const [state,setState] = useState()
  const [url,setUrl] = useState(false)
  const [cardView,setCardView] = useState(false)

  return (
    <div className="App wrapper">
      <Nav logo={logo} />

      {!url?
      <Cards view ={view} setView={setView} state = {state} setState={setState} url={url} setUrl = {setUrl} />
       :
       <View cardView={cardView} setCardView = {setCardView} view ={view} setView={setView} state = {state} setState={setState} url={url} setUrl = {setUrl} />
       }
      
      <Footer/>
    </div>
  );
}

export default App;
