import "../css/index.css"
// import KatieZ from '../images/katie-zaferes.png'
import Star from '/public/images/star.png'
// swap out import Star from './images/star.png' to add to github pages


function Card(props) {
  console.log(props.item)
  let badgeText 
  if (props.item.openSpots === 0) {
    badgeText = "Sold Out"
  } else if (props.item.location === "Online") {
    badgeText = "Online"
  }

    return (
      <div class="card">
        <div className="experience-item">
          <img src={props.item.coverImg}/>
          {badgeText && <p className="card-badge">{badgeText}</p> }
        </div>
        <div classname="description-below">
          <div className="rating">
            <img src={Star}/>
            <p>{props.item.stats.rating}</p><span>({props.item.stats.reviewCount}) • {props.item.location}</span>
          </div>
          <p class="item-description">{props.item.title}</p>
          <p className="item-price"><span className="item-price">From ${props.item.price}</span> / person</p>
        </div>
      </div>
    )
  }
  
  export default Card

      // <section className="experience-cards">
      //   <div className="experience-item">
      //       <img className="card-image" src={props.coverImg} alt="Olympic athlete Katie Zaferes"/>
      //       <p className="experience-text">Sold Out</p>
      //   </div>
      //   <div className="description-below">
      //       <div className="rating">
      //           <img className="star" src={Star} alt="Rating star" width={15}/>
      //           <p>{props.rating}</p><span>({props.reviewCount}) • {props.location}</span>
      //       </div>
      //       <p class="item-description">{props.title}</p>
      //       <p className="item-price"><span className="item-price">From ${props.price}</span> /  person</p>
      //   </div>
      // </section>