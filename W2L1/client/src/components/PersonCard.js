import {useState} from 'react'

const shadow ='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
const styledDiv = {
    display:'flex',
    flexDirection:'column',
    border:'2px solid grey',
    borderRadius:'20px',
    width:'50%',
    padding:'20px',
    boxShadow:{shadow},
    background: 'rgb(154,152,152)',
    color:'black',
    margin:'10px'
}

const styledButton = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border:'2px solid grey',
    borderRadius:'20px',
    padding:'10px',
    boxShadow:{shadow},
    fontSize:'20px',
    color:'black',
    background: 'rgb(238,238,238)',
    background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(199,219,240,1) 100%, rgba(0,0,0,1) 100%)'

}

const PersonCard = (props) => {
    const [state,setState] = useState(props)

    const clickHandler = (e)=>{
        
        setState({...state,age:state.age+1})
    }
  return (
    <div style = {styledDiv}>
        <h2>Name:{state.name}</h2>
        <h3>Age:{state.age}</h3>
        <h3>Hair Color:{state.hairColor}</h3>
        <button onClick={clickHandler} style ={styledButton} >Birthday Button for {props.name}</button>

    </div>
  )
}

export default PersonCard