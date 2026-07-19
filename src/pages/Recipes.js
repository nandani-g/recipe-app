import PreviousSearches from "../components/PreviousSearches"
import RecipesCard from "../components/RecipesCard"

export default function Recipes(){
 
  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        <RecipesCard/>
        
      </div>
    </div>
  )
}