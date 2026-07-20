import CustomImage from "./CustomImage"
export default function RecipesCard() {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc="/img/gallery/img_1.jpg" pt="65%"/>

      <div className="recipe-card-info">
        <img  className = "auther-img" src="/img/top-chiefs/img_1.jpg" alt=""/>
      </div>
    </div>
  )
}