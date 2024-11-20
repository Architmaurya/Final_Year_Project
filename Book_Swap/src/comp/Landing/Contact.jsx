
import '../../App.css';
const Contact = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
      <div className="col">
      <h1 className="text-center mb-4">Contact Us</h1>
      </div>
  
      </div>
      <div className="row">
      <div className="col-md-6 Contact_back p-5">
          <form>
            <div className="form-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Name" 
              />
            </div>
            <div className="form-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
              />
            </div>
            <div className="form-group mb-3">
              <input 
                type="Text" 
                className="form-control" 
                placeholder="Add your Address" 
              />
            </div>
            <div className="form-group mb-3">
              <input 
                type="tel" 
                className="form-control" 
                placeholder="Phone Number" 
              />
            </div>
            <div className="form-group mb-3">
              <textarea 
                className="form-control" 
                placeholder="Message" 
                rows="4">
              </textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger btn-lg">
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <div className="d-flex flex-wrap justify-content-center">
            <img src="Book.jpg" alt="book1" className="img-fluid p-5"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
