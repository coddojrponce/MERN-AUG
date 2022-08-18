

import {useEffect} from 'react'





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
        // console.log(url)
        fetch(`${url}`)
        .then((result)=>{
            // console.log(result)
            // console.log('result from view')
            return result.json()
         })
         .then((res)=>{
             console.log(res)
             setCardView(res)
         })
         .catch((err)=>{
              console.log(err)
         })
    },[view])

  return (

    <div className="card-view">

      <button className="btn exit hover" onClick={handleExit}>X</button>
      <h2 className="hover">{cardView.name}</h2>
      {cardView.sprites? <img className="img-hover" alt="Pokemon" width="140px" height="140px"  src={cardView.sprites.front_shiny}/>:"...Loading"}
      <h3>Abilities:</h3>
      <ul className="hover">
        {cardView.abilities?.map((item,idx)=>(
          <li className="hover">{item.ability.name}</li>
        ))}
      </ul>
      

    </div>
  )
}

export default View