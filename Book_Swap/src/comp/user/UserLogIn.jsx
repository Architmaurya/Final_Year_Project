// import '../../App.css'
// import {useForm} from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const schema = yup
// .object()
// .shape({
//     email:yup.string().required(),
//     password:yup.string().required(),
// })
// .required();

// function UserLogIn(){
//     const navigate = useNavigate()
//     const{register , handleSubmit , reset , formState:{error}} = useForm({
//         resolver:yupResolver(schema),})
//         const handleData = async(data)=>{
//             const payLoad={
//                 email:data.email,
//                 password:data.password
//             }

//             const response = await axios.post("http://localhost:8000/api/user-login",payload,{
//                headers:{
//                 "Content-Type":"application/json"
//                }
//             })


//             if(response.data.code==200){
   
//                 localStorage.setItem("data",JSON.stringify(response.data.data))
//                 localStorage.setItem("userType",JSON.stringify('user'))
        
        
//                 alert("Login Successfull !...")
//                 navigate('/user')
//             }else{
//                 alert("Invalid Email or Password !...")
//             }
           
//         }
//     return(
//         <>
//          <div className="container mb-4">
         
//          <div className="row mt-4">
//                 <div className="col-sm-12">
//                     <h1 className="text-center ">User<span className="text-primary"> LogIn</span></h1>
//                 </div>
//             </div>
//          <div className="row">
//                 <div className="col-lg-12 mx-auto ">
//                     <div className="row mt-4 ">
//                         <div className="col-lg-5 mt-4 mb-4 p-2 user-form mx-auto ">
//                             <form className='' >
//                             <div className='mt-4 mb-4'>
//                                 <h1 className='text-center'>Log IN <span className='text-primary'>Here</span></h1>
//                             </div>
//                                 <div className="">
//                                     <input type="text" placeholder="Enter your email" className="form-control mb-4 mt-4" />
//                                 </div>
//                                 <div className="">
//                                     <input type="password" placeholder="Enter your password" className="form-control mb-4" />
//                                 </div>
//                                 <button className="form-control bg-primary fs-4">Log IN</button>
//                             </form>
//                         </div>
//                         <div className="col-lg-5 ">
//                             <img src="../../public/reclogin.jpg" className="img-fluid" alt="" srcset="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

         
//             </div>
//         </>
//     )
// }
// export default UserLogIn







import '../../App.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

function UserLogIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:8000/api/user-login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.code === 200) {
        localStorage.setItem("data", JSON.stringify(response.data.data));
        localStorage.setItem("userType",JSON.stringify('user'));

        alert("Login Successful!");
        navigate("/user");
      } else {
        alert("Invalid Email or Password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container mb-4">
      <div className="row mt-4">
        <div className="col-sm-12">
          <h1 className="text-center">
            User<span className="text-primary"> LogIn</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <div className="row mt-4">
            <div className="col-lg-5 mt-4 mb-4 p-2 user-form mx-auto">
              <form onSubmit={handleSubmit(handleData)}>
                <div className="mt-4 mb-4">
                  <h1 className="text-center">
                    Log IN <span className="text-primary">Here</span>
                  </h1>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="form-control mb-4 mt-4"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="form-control mb-4"
                    {...register("password")}
                  />
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <button type="submit" className="form-control bg-primary fs-4">
                  Log IN
                </button>
              </form>
            </div>
            <div className="col-lg-5">
              <img
                src="../../public/reclogin.jpg"
                className="img-fluid"
                alt="Login Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogIn;
