

import {useEffect,useState} from 'react'
import axios from 'axios'

const Cards = (props) => {

 
  const {view,setView,state,setState,url,setUrl} = props
  
  useEffect(()=>{
     fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
     .then((result)=>{
        console.log(result)
        return result.json()
     })
     .then((res)=>{
         console.log(res)
         setState(res.meals)
     })
     .catch((err)=>{
          console.log("Bad call or Other Error")
          console.log(err)
     })
  },[])

  

  const handleView = (id)=>{
    console.log(id)
    setUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setView(true)


  }
  return (
    <div className="cards">

        {
          state?.map((item,idx)=>(
              <div style={{backgroundImage:`url(${item.strMealThumb})`}} className="card hover" key={idx}>
                <h2>{item.strMeal}</h2>
                {/* <img class="dessert-preview" src={item.strMealThumb} alt="Dessert Thumbnail"/> */}
                <button className="btn hover" onClick={()=>handleView(item.idMeal)} >view {item.name}</button>
              </div>
          ))
        }
        
        
    </div>
  )
}

export default Cards