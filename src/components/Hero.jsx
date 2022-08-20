import "../css/index.css"
import HeroMain from './images/Group-77.png'

function Hero() {

    return (
      <section className="container hero-section">
        <img className="hero-image" src={HeroMain} alt="Images of people doing activities"/>
        <div className="hero-text">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </section>
    )
  }
  
  export default Hero