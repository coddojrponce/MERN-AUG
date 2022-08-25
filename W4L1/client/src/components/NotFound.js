

import {useEffect} from 'react'
import axios from 'axios'
import sadDessert from '../static/404.gif'
import {useParams,useNavigate} from 'react-router-dom'




const NotFound = (props) => {
    
    const navigate = useNavigate()



    const handleExit = ()=>{

    
       navigate('/desserts')
       
    }

    

  return (

    <div className="card-view">

      <button className="btn exit hover" onClick={handleExit}>&#215;</button>
      <h2>404 NOT FOUND</h2>
      <img className="thumb" src={sadDessert} alt="Sad Dessert Image"/>
      
    </div>
  )
}

export default NotFound