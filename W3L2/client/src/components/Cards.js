

import {useEffect,useState} from 'react'

const Cards = (props) => {

 
  const {view,setView,state,setState,url,setUrl} = props
  
  useEffect(()=>{
     fetch('https://pokeapi.co/api/v2/pokemon')
     .then((result)=>{
        console.log(result)
        return result.json()
     })
     .then((res)=>{
         console.log(res)
         setState(res.results)
     })
     .catch((err)=>{
          console.log("Bad call or Other Error")
          console.log(err)
     })
  },[])

  

  const handleView = (idx)=>{
    const url = state[idx].url
    //  console.log(url)
     setView(true)
     setUrl(url)


  }
  return (
    <div className="cards">

        {
          state?.map((item,idx)=>(
              <div className="card hover" key={idx}>
                <h2>{item.name}</h2>
                <button className="btn hover" onClick={()=>handleView(idx)} >view {item.name}</button>
              </div>
          ))
        }
        
        
    </div>
  )
}

export default Cards