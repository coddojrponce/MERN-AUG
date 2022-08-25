import logo from './static/logo.png';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'
import View from './components/View'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import {useState} from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'

function App() {

  const [state,setState] = useState()
  const [cardView,setCardView] = useState(false)
  
  return (
    <div className="App wrapper">
      <Nav logo={logo} />
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/desserts" />}/>
        <Route
        index
        path="desserts"
        element={<Cards state = {state} setState={setState} />}
        ></Route>
        <Route
        path="desserts/:id"
        element={<View cardView={cardView} setCardView = {setCardView}  state = {state} setState={setState}/>}
        ></Route>
        <Route
        path="notfound"
        element={<NotFound/>}
        ></Route>
        <Route
        path="*"
        element={<Navigate to="/notfound" />}
        ></Route>
          
        </Routes>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
