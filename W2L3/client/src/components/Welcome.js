
import React from 'react'
import { Container } from 'react-bootstrap'
import tada from '../static/tada.gif'

const backgroundImg = {
  height:'75vh',
  backgroundImage:`url(${tada})`,
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover'
  

  // backgroundColor:'red'
}

const header = {
  fontSize:'70px',
  display:'flex',
  margin:'5px'
}

const text = {
  fontSize:'30px',
  display:'flex'
}

const modal = {
  backgroundColor:'#00000020',
  width:'70%',
  height:'70%',


}

const Welcome = (props) => {

  const {state} = props

  return (
    <Container className={"d-flex flex-column justify-content-center align-items-center p-4 shadow rounded"}style={backgroundImg}>

        <Container className={"d-flex flex-column align-items-center p-4 shadow rounded "} style={modal}>
          <h2 style={header} className ="d-flex text-success">Welcome {state.name.value}</h2>
          <p style={text} className ="text-success">Thank you !! </p>
          <p style={text} className ="text-success">Email: {state.email.value} </p>
          <p style={text} className ="text-success">Password:{state.password.value}</p>

        </Container>
        
    </Container>
  )
}

export default Welcome