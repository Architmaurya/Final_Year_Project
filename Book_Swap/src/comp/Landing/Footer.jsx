import '../../App'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdMailOutline } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="row footer py-4">
        <div className="col-10 mx-auto d-flex align-items-center">
          <div className="row w-100">
            {/* About Us Section */}
            <div className="col-4">
              <h1 className='mb-3'>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem fugit earum autem! Maiores,
              </p>
              <div className="social-icons">
                <a href="#"><FaFacebookSquare /></a>
                <a href="#"><FaTwitterSquare /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagramSquare /></a>
              </div>
            </div>

            {/* Address Section */}
            <div className="col-3 offset-1">
              <h1 className='mb-3'>Address</h1>
              <p><FaLocationDot /> Location</p>
              <p><MdCall /> Call +011234567890</p>
              <p><MdMailOutline /> demo@gmail.com</p>
            </div>

            {/* Newsletter Section */}
            <div className="col-4">
              <h1 className='mb-3'>Newsletter</h1>
              <form>
                <input type="email" placeholder="Enter email" className="form-control mb-3 rounded-5" />
                <button className="btn btn-outline-primary form-control rounded-5 btn-sub" >Subscribe</button>
              </form>
            </div>
          </div>
        </div>        
      </div>
      <div className="row copyrights d-flex align-items-center bg-light">
        <div className="col-12  ">
           &copy;2024 All Rights Reserved By Free Html Templates
        </div>
        </div>
    </>
  );
}

export default Footer;
