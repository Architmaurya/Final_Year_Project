import '../../App.css';
import { useEffect ,useState} from "react"
import axios from "axios"
function BookList() {
    // const user_arr = [
    //     {
    //         img: "/reclogin.jpg", // Ensure this path is correct.
    //         name: "Archit Maurya",
    //         bname:"Archit",
    //         writer:"Aeffjiwe",
    //         book:"wiiu",
    //         posting:"24/03/2023"
    //     }
    // ];
    const [book, setbook] = useState([])
    useEffect(()=>{
        fetchData()
       
    },[])
    const fetchData=async()=>{
        const response=await axios.get("http://localhost:8000/api/admin-booklist",{
           headers:{
               "Content-Type":"application/json"
           }
         })
       if(response.data.code==200){
           setbook(response.data.data)        
       }
       }


    return (
        <div className="container">
            <div className="row justify-content-center">
                {book.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4 user_list my-2 mx-2" key={index}>
                        <div className="card p-2 h-100">
                            <div className="text-center">
                                <img
                                    className="user_img img-fluid rounded-circle"
                                    src={`http://localhost:8000/upload/${item.img}`}
                                    alt={`${item.name}'s avatar`}
                                    style={{ maxWidth: '100px', height: '100px' }}
                                />
                            </div>
                            <div className="user_name text-center mt-2 font-weight-bold">{item.name}</div>
                            <table className="table table-borderless mt-3">
                                <tbody>
                                <tr>
                                        <td className="text-right font-weight-bold">user_ID:</td>
                                        <td className="text-left">{item.userId}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Book_Name:</td>
                                        <td className="text-left">{item.Book_Name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Author_Name:</td>
                                        <td className="text-left">{item.Author_Name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Genres:</td>
                                        <td className="text-left">{item.Genres}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Contact:</td>
                                        <td className="text-left">{item.contact}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Posted_Date:</td>
                                        <td className="text-left">{item.createdAt}</td>
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