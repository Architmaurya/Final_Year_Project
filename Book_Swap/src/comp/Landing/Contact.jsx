import '../../App.css';

const Contact = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <h1 className="text-center mb-4">Contact Us</h1>
        </div>
      </div>
      <div className="row align-items-center">
        {/* Form Section */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="Contact_back p-4">
            <form>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Add your Address" />
              </div>
              <div className="form-group mb-3">
                <input type="tel" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-danger btn-lg">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img src="Book.jpg" alt="book1" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
