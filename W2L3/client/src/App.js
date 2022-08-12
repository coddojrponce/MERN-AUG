import {useState} from 'react'
import MyForm from './components/MyForm'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome';

const initialState = {
  name:{
    value:'',
    error:null
  },
  email:{
    value:'',
    error:null
  },
  password:{
    value:'',
    error:null
  },
  confirmPassword:{
    value:'',
    error:null
  },
  submitted:false

}

function App() {

  const [state,setState] = useState(initialState)
  const [error,setError] = useState(false)


  return (
    <div className="d-flex flex-column align-items-center">
      <NavBar setState = {setState} initialValue = {initialState}/>
      {!state.submitted ?
      <MyForm state ={state} setState = {setState} error = {error} setError={setError} />
      :
      <Welcome state={state}/>
      }
      
      
      
    </div>
  );
}

export default App;
