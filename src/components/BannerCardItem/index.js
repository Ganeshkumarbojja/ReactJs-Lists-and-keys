// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardItems} = props
  const {className, headerText, description} = cardItems
  return (
    <li className={className}>
      <h1 className="head">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default BannerCardItem
