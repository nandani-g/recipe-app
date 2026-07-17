export default function ChiefCart(){
  return (
    <div className="chief-card">
      <img src={ChiefsSection.image} alt={ChiefCart.name}/>
      <div className="chief-card-info">
        <h3 className="chief-card-name">{ChiefCart.name}</h3>
        <p className="chief-card-description">{ChiefCart.description}</p>
      </div>
    </div>
  )
}