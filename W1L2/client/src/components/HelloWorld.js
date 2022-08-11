

import React from 'react'

const HelloWorld = (props) => {

    const num = Math.floor(Math.random()*(10-1)+1)

    return (
    <div style={{width:"200px",backgroundColor:""}}>
      <h1>Hello World</h1>
      <ul>
        <li>Mango</li>
        <li>Banana</li>
        <li>Pineapple</li>
        <li>{num}</li>
        {num > 5?
        <button>Logout</button>:
        <button>Login</button>}
      </ul>
      <a href="http://">Favorite Video</a>
    </div>
  )
}

export default HelloWorld