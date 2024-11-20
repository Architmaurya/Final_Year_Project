import '../../App.css';
function BookList() {
    const user_arr = [
        {
            img: "/reclogin.jpg", // Ensure this path is correct.
            name: "Archit Maurya",
            bname:"Archit",
            writer:"Aeffjiwe",
            book:"wiiu",
            posting:"24/03/2023"
        }
    ];

    return (
        <div className="container">
            <div className="row justify-content-center">
                {user_arr.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4 user_list my-2 mx-2" key={index}>
                        <div className="card p-2 h-100">
                            <div className="text-center">
                                <img
                                    className="user_img img-fluid rounded-circle"
                                    src={item.img}
                                    alt={`${item.name}'s avatar`}
                                    style={{ maxWidth: '100px', height: '100px' }}
                                />
                            </div>
                            <div className="user_name text-center mt-2 font-weight-bold">{item.name}</div>
                            <table className="table table-borderless mt-3">
                                <tbody>
                                    <tr>
                                        <td className="text-right font-weight-bold">Book_Name:</td>
                                        <td className="text-left">{item.bname}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Writer:</td>
                                        <td className="text-left">{item.writer}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Book_catergory:</td>
                                        <td className="text-left">{item.book}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Posting_Date:</td>
                                        <td className="text-left">{item.posting}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default BookList