

import React from 'react'

const Nav = (props) => {

  const {logo} = props
  return (
    <div className="nav">
        <img height="40px" src={logo} alt="logo"/>
        Pokemon API
    </div>
    
  )
}

export default Nav