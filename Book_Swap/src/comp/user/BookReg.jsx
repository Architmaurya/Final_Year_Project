function BookReg(){
    return(
        <>
         <div className="container_Bookform">
        <div className="row ">
            <div className="col-lg-6 mx-auto text-center mt-3">
            <h1 className="">Book<span className="text-primary"> Form</span> </h1>
            </div>
        </div>
            <div className="row ">

                <div className="col-lg-5 mx-auto mt-4 mb-4 form-style-Book">
                <form>
                    <div className="">
                      <input type="text" className="form-control mb-3 mt-3" placeholder="  Book_Name"/>
                    </div>
                    <div className="">
                    <input type="text" className="form-control mb-3 " placeholder="Author Name"/>
                    </div>
                    <div className="">
                      <input type="text" className="form-control mb-3 mt-3" placeholder="Genres"/>
                    </div>
                    <div className="">
                    <input type="number" className="form-control mb-3" placeholder="Enter the Amount"/>
                    </div>
                    <div className="">
                    <input type="moblie" className="form-control mb-3" placeholder="Enter Your Contact Number"/>
                    </div>
                    <div className="">
                    <input type="file" className="form-control mb-3 " />
                    </div>
                    <div className="">
                    <input type="submit" value="SUBMIT" className="form-control mb-3 fs-5 bg-primary" />
                    </div>

                </form>
                </div>
                {/* <div className="col-lg-5 mx-auto ">
                    <img src="../../public/user.jpg" className="img-fluid"/>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default BookReg