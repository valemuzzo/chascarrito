
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";



function Footer() {
    return(
        
    <div className="footer mt-3">
      <div className="d-flex justify-content-center mt-5 py-5">
      
      <Link className="px-3" to="/"><FontAwesomeIcon className="fa-2x" icon={faFacebookF} /></Link>
      <Link className="px-3" to="/"><FontAwesomeIcon className="fa-2x" icon={faTwitter} /></Link>
      <Link className="px-3" to="/"><FontAwesomeIcon className="fa-2x" icon={faGooglePlusG} /></Link>
      <Link className="px-3" to="/"><FontAwesomeIcon className="fa-2x" icon={faLinkedinIn} /></Link>
      <Link className="px-3" to="/"><FontAwesomeIcon className="fa-2x" icon={faInstagram} /></Link>
      
      </div>
      <div className="text-center py-3">
        © 2021 
        <a href="#"> Chascarrito.com.ar</a>
      </div>
    </div>
    
    )
    }
    
    export default Footer;