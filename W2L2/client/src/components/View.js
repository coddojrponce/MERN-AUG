


import React from 'react'

const View = (props) => {
  return (
    <div>
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
        <h3>{props.password}</h3>
    </div>
  )
}

export default View