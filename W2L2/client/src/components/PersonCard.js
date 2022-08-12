


import React from 'react'

const PersonCard = (props) => {

    const styledDiv={
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'2px solid black',
        borderRadius:'20px',
        width:'25%',
        padding:'20px',
        margin:'10px'
    }

    const styledMargin ={
        display:'flex',
        flexDirection:'column',
        padding:'2px',
        margin:'5px',
        justifyContent:'center',
        alignItems:'center',
    }

    const styledBorder ={
        borderRadius:'5px',
        padding:'2px',
        height:'30px',
        
    }
      
    const styledButton ={
        backgroundColor:'#5cb85c',
        borderRadius:'5px',
        color:'white',
        padding:'10px 20px',
        fontSize:'20px',
        
    }

  return (
    <div style={styledDiv}>
        <h2>Person Card</h2>
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
        <h3>{props.password}</h3>
    </div>
  )
}

export default PersonCard