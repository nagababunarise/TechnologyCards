import './index.css'

const CardItem = props => {
  const {sourceObj} = props
  const {title, description, imgUrl, className} = sourceObj

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="card-img" />
    </li>
  )
}
export default CardItem
