import customer1 from "./assets/customer1.jpg";
import customer2 from "./assets/customer2.jpg";
import customer3 from "./assets/customer3.jpg";

const CustomersSay = () => {
    return(
        <article class="reviews" id="scrollreviews">
            <div class="firstrow">
                <h2>Read Our Latest Reviews!</h2>
            </div>
            <div class="secondrow">
                <div class="testimonial">
                    <h3>Rating: ⭐⭐⭐⭐⭐</h3>
                    <img src={customer1} alt="customer 1"/>
                    <p>John Doe</p>
                    <p>These cupcakes are awesome!!!</p>
                </div>
                <div class="testimonial">
                    <h3>Rating: ⭐⭐⭐⭐⭐</h3>
                    <img src={customer2} alt="customer 2"/>
                    <p>Jane Doe</p>
                    <p>I've never had better cookies in my life 👀</p>
                </div>
                <div class="testimonial">
                    <h3>Rating: ⭐⭐⭐⭐⭐</h3>
                    <img src={customer3} alt="customer 3"/>
                    <p>Joe Wo</p>
                    <p>Order from Corn Baby Cakes and make your momma happy!</p>
                </div>
            </div>
        </article>
    )
}

export default CustomersSay