import '../../App.css'
function UserLogIn(){
    return(
        <>
         <div className="container mb-4">
         
         <div className="row mt-4">
                <div className="col-sm-12">
                    <h1 className="text-center ">User<span className="text-primary"> LogIn</span></h1>
                </div>
            </div>
         <div className="row">
                <div className="col-lg-12 mx-auto ">
                    <div className="row mt-4 ">
                        <div className="col-lg-5 mt-4 mb-4 p-2 user-form mx-auto ">
                            <form className='' >
                            <div className='mt-4 mb-4'>
                                <h1 className='text-center'>Log IN <span className='text-primary'>Here</span></h1>
                            </div>
                                <div className="">
                                    <input type="text" placeholder="Enter your email" className="form-control mb-4 mt-4" />
                                </div>
                                <div className="">
                                    <input type="password" placeholder="Enter your password" className="form-control mb-4" />
                                </div>
                                <button className="form-control bg-primary fs-4">Log IN</button>
                            </form>
                        </div>
                        <div className="col-lg-5 ">
                            <img src="../../public/reclogin.jpg" className="img-fluid" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>

         
            </div>
        </>
    )
}
export default UserLogIn