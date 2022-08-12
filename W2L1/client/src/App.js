import PersonCard from './components/PersonCard'
import DynamicPersonCard from './components/DynamicPersonCard';
import './App.css';
import {useState} from 'react'

const styledCont={
  display:'flex',
  margin:'0 auto',
  justifyContent:'center',
  // backgroundColor:'red',

}


const apiData = [
  {
    name:"Bob",
    age:54,
    hairColor:'blue'
  },
  {
    name:'Bill',
    age:90,
    hairColor:'red'
  },
  {
    name:'Samantha',
    age:23,
    hairColor:'purple'
  },
  {
    name:'Erika',
    age:35,
    hairColor:'blonde'
  }
]


function App() {

  //getter is state setter is setState

  const [state,setState] = useState(apiData)
  


  return (
    <div className="App" style={styledCont}>

      {/* this is receiving the name from the "api data" */}
      {/* <PersonCard name={apiData[0].name} age= {apiData[0].age} hair= {apiData[0].hairColor}/> */}


      {/* this is receiving the name from the state which has the "api data" saved*/}
      {/* <PersonCard name={state[1].name} age={state[1].age} hair={state[1].hairColor}/> */}

      

      {/* this is using map to iterate through state */}
      {
      state.map((item,index)=>{
        //this can be written different, without the return
        return(<DynamicPersonCard   item = {item} key = {index}/>)
      })
      }


    </div>
  );
}

export default App;
