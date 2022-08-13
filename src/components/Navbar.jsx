import "../css/index.css"
import AirbnbLogo from '../images/airbnb-logo.png'

function Navbar() {

    return (
      <div className="container">
        <div className="navbar-main">
            <img className="logo" src={AirbnbLogo} alt="Airbnb logo"/>
        </div>
      </div>
    )
  }
  
  export default Navbar