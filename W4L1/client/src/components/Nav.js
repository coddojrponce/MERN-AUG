

import React from 'react'

const Nav = (props) => {

  const {logo} = props
  return (
    <div className="nav">
        <img className="logo"  src={logo} alt="logo"/>
        RecipeAPI
    </div>
    
  )
}

export default Nav