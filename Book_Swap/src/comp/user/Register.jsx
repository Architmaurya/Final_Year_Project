import "../../App.css"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const schema = yup
    .object()
    .shape({
        name: yup.string().required().min(2).max(20),
        img: yup.mixed().required(),
        email: yup.string().required().email(),
        contact: yup.string().required(),
        password: yup.string().required(),
    })

function Register(){
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const handleData = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("img", data.img[0]);
        formData.append("email", data.email)
        formData.append("contact", data.contact)
        formData.append("password", data.password)
        await axios.post("http://localhost:8000/api/user-register", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        alert("Registation SuccessFull !.")
        reset()
    }
  
    return(
        <>
        <div className="row">
            <div className="col-lg-6 mx-auto text-center mt-3">
            <h1 className="">Register<span className="text-primary"> Here</span> </h1>
            </div>
        </div>
            <div className="row ">

                <div className="col-lg-5 mx-auto mt-4 mb-4 form-style">
                <form onSubmit={handleSubmit(handleData)}>
                    <div className="">
                      <input type="text" className="form-control mb-3 mt-3" placeholder="Enter Your  Name"
                      {...register('name')}
                      />
                    </div>
                    <div className="">
                    <input type="Email" className="form-control mb-3 " placeholder="Enter Your Email"
                    {...register('email')}
                    />
                    </div>
                    <div className="">
                    <input type="password" className="form-control mb-3" placeholder="Enter Your Password"
                    {...register('password')}
                    />
                    </div>
                    <div className="">
                    <input type="file" className="form-control mb-3 " 
                    {...register('img')}
                    />
                    </div>
                    <div className="">
                    <input type="number" className="form-control mb-3" placeholder="Enter Your Contact Number"
                    {...register('contact')}
                    />
                    </div>
                    <div className="">
                    <input type="submit" value="SUBMIT" className="form-control mb-3 fs-5 bg-primary" />
                    </div>

                </form>
                </div>
                <div className="col-lg-5 mx-auto ">
                    <img src="../../public/user.jpg" className="img-fluid"/>
                </div>
            </div>
        </>
    )
}
 export default Register