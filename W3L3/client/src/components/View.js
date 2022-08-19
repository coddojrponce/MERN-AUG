

import {useEffect} from 'react'
import axios from 'axios'
import ytb from '../static/ytb.png'




const View = (props) => {
    const {cardView, setCardView ,view,setView,state,setState,url,setUrl} = props

    const handleExit = ()=>{
       setUrl(false)
       setCardView("")
    }

    useEffect(()=>{

        if(!view){
            return
        }
        console.log(url)
        axios.get(`${url}`)
        .then((response)=>{
            console.log(response)
            console.log(response.data.meals[0])
            setCardView(response.data.meals[0])
            
         })
         .catch((err)=>{
              console.log("Something has gone wrong")
              console.log(err)
         })
    },[view])

  return (

    <div className="card-view">

      <button className="btn exit hover" onClick={handleExit}>&#215;</button>
      <h2>{cardView.strMeal}</h2>
      {cardView.strMealThumb ? <img className="thumb" src={cardView.strMealThumb} alt="Dessert Image"/>:"...LOADING"}
      <h3>Ingredients:</h3>
      <ul>
        {
          cardView.strMeal? 

               Object.keys(cardView).filter((item)=>{return (item.match("strIngredient") && cardView[item] !== "" )}).map((item,idx)=>(cardView[item] ? <li key={idx}>{cardView[item]}</li>:null))
               
               
              
          :null
          
          
        }
      </ul>
      <h3>Directions:{cardView.strInstructions}</h3>
      <a target = "_blank" href={cardView.strYoutube}><img className="yt-btn" src={ytb} alt="Youtube Link Button" /></a>
    </div>
  )
}

export default View