import '../../App.css'
import Category from './Category';
import About from './About';
import Contact from './Contact';
import Typewriter from 'typewriter-effect';
function Home(){
    return(
        <>
        <div className="hero-section">
        </div>
        <Category/>

        <About/>

        <Contact/>
       
        </>
    )
}
export default Home