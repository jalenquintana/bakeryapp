import footerlogo from './assets/logo.JPEG'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import yelp from './assets/yelp.png'
import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <footer>
            <img src={footerlogo} alt='Corn Baby Cakes logo'/>
            <ul>
                <li>
                    <h3>Website Navigation</h3>
                </li>
                <li>
                    <Link to="/" className="nav-item">Home</Link>
                </li>
                <li>
                    About
                </li>
                <li>
                    Gallery
                </li>
                <li>
                    <Link to="/booking" className="nav-item">Order Now!</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Contact Us</h3>
                </li>
                <li>
                    123 Long St, Arlington, TX 
                </li>
                <li>
                    555-555-5555
                </li>
                <li>
                    cornbabycakes@gmail.com
                </li>
            </ul>
            <ul className='follow'>
                <li>
                    <h3>Follow Our Socials</h3>
                </li>
                <li>
                    <img src={facebook} alt="our facebook page" className='social'/>
                </li>
                <li>
                    <img src={instagram} alt="our instagram page" className='social'/>
                </li>
                <li>
                    <img src={yelp} alt="our yelp page" className='social'/>
                </li>
            </ul>
        </footer>
    )
}

export default Footer