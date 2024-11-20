import '../../App.css'
//used for validation of the form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();


function Adminlog(){
    const navigate=useNavigate()
    const { register, handleSubmit ,reset,formState:{errors}} = useForm({
        resolver: yupResolver(schema),})
        const handleData=async(data)=>{
            const payLoad={
            email:data.email,
            password:data.password
           }
         const response=await axios.post("http://localhost:8000/api/Admin-login",payLoad,{
               headers:{
                   "Content-Type":"application/json"
               }
              })
       if(response.data.code==200){
   
           localStorage.setItem("data",JSON.stringify(response.data.data))
           localStorage.setItem("userType",JSON.stringify('admin'))
   
   
           alert("Login Successfull !...")
           navigate('/admin')
       }else{
           alert("Invalid Email or Password !...")
       }
      
         }
        
    return(
        <>
        <div className="container mb-4">
            <div className="row mt-4">
                <div className="col-sm-12">
                    <h1 className="text-center ">Admin<span className="text-primary"> LogIn</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 mx-auto ">
                    <div className="row mt-4 ">
                        <div className="col-lg-5 ">
                            <img src="../../public/loginAdmin.jpg" className="img-fluid" alt="" srcset="" />
                        </div>
                        <div className="col-lg-5 mt-4 mb-4 p-2 admin-form mx-auto ">
                            <form onSubmit={handleSubmit(handleData)} >
                            <div className='mt-4 mb-4'>
                                <h1 className='text-center '>Log IN <span className='text-primary'>Here</span></h1>
                            </div>
                                <div className="">
                                    <input type="text"
                                     placeholder="Enter your email" 
                                     className="form-control mb-4 mt-4 fs-4"
                                     {...register('email')} />
                                      {errors.email?.message && <span  className='error_msg'>{errors.email?.message}</span>}
                                </div>
                                <div className="">
                                    <input type="password"
                                     placeholder="Enter your password" 
                                     className="form-control mb-4 mt-4 fs-4"
                                     {...register('password')} />
                                     {errors.password?.message && <span  className='error_msg'>{errors.password?.message}</span>}
                                </div>
                                <div className="">
                    <input  className="bg-primary mt-4 fs-4 form-control " 
                    type="submit"
                    value="Login"
                    />
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

export  default Adminlog