import '../../App.css';
import { useEffect ,useState} from "react"
import axios from "axios"
function UserList() {
    // const user_arr = [
    //     {
    //         img: "/reclogin.jpg", // Ensure this path is correct.
    //         name: "Archit Maurya",
    //         email: "Architmaurya7054@gmail.com",
    //         contact: "8896540831"
    //     }
    // ];
    const [user, setuser] = useState([])
    useEffect(()=>{
        fetchData()
       
    },[])
    const fetchData=async()=>{
        const response=await axios.get("http://localhost:8000/api/admin-userlist",{
           headers:{
               "Content-Type":"application/json"
           }
         })
       if(response.data.code==200){
           setuser(response.data.data)        
       }
       }
    return (
        <div className="container">
            <div className="row justify-content-center">
                {user.map((item, index) => (
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
                                        <td className="text-right font-weight-bold">Email:</td>
                                        <td className="text-left">{item.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right font-weight-bold">Contact:</td>
                                        <td className="text-left">{item.contact}</td>
                                    </tr>
                                    <tr>
                                        <td className='btn_block'>
                                            <input type="button" value="Block" className='bg-secondary' />
                                        </td>
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

export default UserList;
