import aboutpic1 from './assets/zoe.jpeg'
import aboutpic2 from './assets/cat.png'

const About = () => {
    return(
        <article class="about" id='scrollabout'>
            <div class="columnfirst">
                <h1>Who We Are</h1>
                <h3>Zoe Quintana & Her Lovely Assistant, Croissant</h3>
                <p>Zoe has been baking since she was 10 years old and can't wait to share her passion with you!</p>
                <p>Croissant may be a cat, but don't be fooled! I can make cupcakes like nobody's business!</p>
            </div>
            <div class="columnsecond">
                <img src={aboutpic1} alt="our owner"/>
                <img src={aboutpic2} alt="our second in command, a cat"/>
            </div>
        </article>
    )
}

export default About