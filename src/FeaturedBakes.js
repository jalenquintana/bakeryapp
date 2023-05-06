import special1 from './assets/cupcakes.png'
import special2 from './assets/gothic.jpeg'
import special3 from './assets/cookies.jpeg'

const FeaturedBakes = () => {
    return(
        <article class="bakes" id="scrollbakes">
            <div class="row1">
                <h2>Featured Bakes</h2>
            </div>
            <div class="row2">
                <div class="special">
                    <img src={special1} alt="cupcake 1"/>
                    <h3>Mother's Bouquet</h3>
                    <h3>$12.99</h3>
                    <p>Treat mom to a delicious gift this Mother's Day!</p>
                    <button>Order Now!</button>
                </div>
                <div class="special">
                    <img src={special2} alt="cupcake 2"/>
                    <h3>Gothic Sweets</h3>
                    <h3>$5.99</h3>
                    <p>Pacify the edgy teen in your life!</p>
                    <button>Order Now!</button>
                </div>
                <div class="special">
                    <img src={special3} alt="cupcake 3"/>
                    <h3>Monster Cookies</h3>
                    <h3>$5.00</h3>
                    <p>Quench the hunger monster within!</p>
                    <button>Order Now!</button>
                </div>
            </div>
        </article>
    )
}

export default FeaturedBakes