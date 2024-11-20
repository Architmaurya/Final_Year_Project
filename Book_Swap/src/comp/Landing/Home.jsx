import '../../App.css'
import Category from './Category';
import About from './About';
import Contact from './Contact';
import Typewriter from 'typewriter-effect';
function Home(){
    return(
        <>
        <div className="hero-section">
        <div className="col-lg-5 col-md-8 typewriter">
        <Typewriter
          options={{
            strings: ['Find the most exciting startup jobs...'],
            autoStart: true,
            loop: true,
          }}
       />
        </div>
        
        </div>
        <Category/>

        <About/>

        <Contact/>
       
        </>
    )
}
export default Home