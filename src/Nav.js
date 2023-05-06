import { Link } from "react-router-dom"

const Nav = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/" className="nav-link1">Home</Link>
                </li>
                <li>
                    <a href="#scrollbakes">Gallery</a>
                </li>
                <li>
                    <a href="#scrollreviews">Reviews</a>
                </li>
                <li>
                    <a href="/#scrollabout">About</a>
                </li>
                <li>
                    <Link to="/booking" className="nav-link2">Order Now!</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav