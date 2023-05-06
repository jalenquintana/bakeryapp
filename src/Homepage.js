import Banner from './Banner';
import FeaturedBakes from './FeaturedBakes';
import CustomersSay from './CustomersSay';
import About from './About';

const Homepage = () => {
    return(
        <>
            <Banner></Banner>
            <FeaturedBakes></FeaturedBakes>
            <CustomersSay></CustomersSay>
            <About></About>
        </>
    )
}

export default Homepage