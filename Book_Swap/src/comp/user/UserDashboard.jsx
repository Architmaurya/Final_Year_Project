import '../../App.css'
function UserDashboard(){
    return(
        <>
                <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-sm form_card">
                <div className="card-header form_cardheader text-center">
                  <h4 className="mb-0 form_h2">User Profile Update</h4>
                </div>
                <div className="card-body p-4">
                  <form >
                    <div className="row mb-3">
                      <div className="col-md-6">
                      <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Name :</label>
                          <input  type="text" className="form-control" placeholder="Enter Your Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Email :</label>
                          <input  type="text" readOnly={true} className="form-control" placeholder="Enter Your Email" />
                         
                        </div>
                      </div>
                    </div>
    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Contact :</label>
                          <input  type="number" className="form-control" placeholder="Enter Your Contact"/>
                         
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Password :</label>
                          <input type='password' className="form-control" placeholder='Enter Your Password'/>
                        </div>
                      </div>
                    </div>
    
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">img :</label>
                          <input  type="file" className="form-control" accept='img/*' />
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <input type="submit" value='UPDATE PROFILE' className="form_button"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default UserDashboard