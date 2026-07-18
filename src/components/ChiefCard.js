import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function ChiefCart({chief}){
  return (
    <div className="chief-card">
      <img src={chief.img} alt={ChiefCart.name}/>
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chief.name}</h3>
        <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
        <p className="chief-cuisine">cuisine: <b>{chief.cuisine}</b></p>

        <p className="chief-icon">
         
          <FontAwesomeIcon icon = {faFacebook}/>
           <FontAwesomeIcon icon = {faTwitter}/>
            <FontAwesomeIcon icon = {faInstagram}/>



        </p>
      </div>
    </div>
  )
}