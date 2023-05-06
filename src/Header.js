import logo from './assets/logo.JPEG'
import Nav from './Nav';

const Header = () =>{
    return(
        <header>
            <img src={logo} alt="Corn Baby Cakes logo"/>
            <Nav></Nav>
        </header>
    )
}

export default Header