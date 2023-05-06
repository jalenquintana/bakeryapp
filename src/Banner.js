import store from './assets/store.jpg'

const Banner = () => {
    return(
        <section className="banner">
            <div className='leftcolumn'>
                <h1>Corn Baby Cakes</h1>
                <h3>Based in Arlington, TX</h3>
                <p>Your one-stop cupcake shop for any occasion!</p>
                <button>Order Now!</button>
           </div>
           <div className='rightcolumn'>
                <img className="bannerpic" src={store} alt="our storefront"/>
            </div>
        </section>
    )
}

export default Banner