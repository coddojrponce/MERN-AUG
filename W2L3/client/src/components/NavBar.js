
import React from 'react'
import {Nav} from 'react-bootstrap'

const NavBar = (props) => {
  const {initialValue,setState} = props

  const handleReset = (e)=>{
    console.log(e)
    setState(initialValue)
  }
  return (
    <Nav  className=" justify-content-center mb-5 shadow rounded w-100"
    onSelect={handleReset}>
        <Nav.Item>
            <Nav.Link 
            href="#"
            eventKey='Home'>
            Home
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link 
            href="#"
            eventKey='About'>
            About
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link 
            href="#"
            eventKey='Register'>
            Register
            </Nav.Link>
        </Nav.Item>
    </Nav>
  )
}

export default NavBar