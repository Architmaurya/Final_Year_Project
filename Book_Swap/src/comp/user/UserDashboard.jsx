import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'; // Form Validation
import { yupResolver } from '@hookform/resolvers/yup'; // Form Validation
import * as yup from 'yup'; // Form Validation
import axios from 'axios';
import '../../App.css'

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters').max(30, 'Name must be less than 30 characters'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  contact: yup.string().required('Contact is required'),
  password: yup.string().required('Password is required'),
  location:yup.string().required('Enter your Location'),
  img: yup.mixed().required('Image is required')
});


function UserDashboard(){
  const [data, setData] = useState(null);

  useEffect(() => {
    const temData = JSON.parse(localStorage.getItem('data'));
    setData(temData);
  }, []); // Empty dependency array ensures this runs only once.

  useEffect(() => {
    const userdetails = JSON.parse(localStorage.getItem('data'));
    if (userdetails) {
      setValue('name', userdetails.name);
      setValue('email', userdetails.email);
      setValue('contact', userdetails.contact);
      setValue('password', userdetails.password);
      setValue('location', userdetails.location);
    }
  }, []); // Empty dependency array ensures this runs only once.

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async (formData) => {
    if (!formData || !formData.img || formData.img.length === 0) {
      alert('Please select an image');
      return;
    }

    const temData = JSON.parse(localStorage.getItem('data'));
    const submissionData = new FormData();
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('contact', formData.contact);
    submissionData.append('password', formData.password);
    submissionData.append('location', formData.location);
    submissionData.append('img', formData.img[0]);

    try {
      const response = await axios.put(`http://localhost:8000/api/user-update/${temData._id}`, submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.code === 200) {
        alert('Admin Updated Successfully');
      } else {
        alert('Failed to update admin');
      }
    } catch (error) {
      console.error('Error updating admin:', error);
      alert('An error occurred while updating the profile');
    }
  };

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
                {data && data.img ? (
                  <div className="col-md-6 mx-auto text-center mb-3">
                    <img
                      src={`http://localhost:8000/upload/${data.img}`}
                      alt="Admin"
                      className="img-fluid admin_img"
                    />
                  </div>
                ) : (
                  <div className="text-center mb-3">No Image Available</div>
                )}
                  <form onSubmit={handleSubmit(handleData)}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                      <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Name :</label>
                          <input  type="text"
                           className="form-control"
                            placeholder="Enter Your Name"
                            {...register('name')} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Email :</label>
                          <input  type="text"
                           readOnly={true} 
                           className="form-control"
                            placeholder="Enter Your Email" 
                            {...register('email')}
                            />
                         
                        </div>
                      </div>
                    </div>
    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Contact :</label>
                          <input  type="number" 
                          className="form-control" 
                          placeholder="Enter Your Contact"
                          {...register('contact')}
                          />
                         
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Password :</label>
                          <input type='password' 
                          className="form-control"
                           placeholder='Enter Your Password'
                           {...register('password')}
                           />
                        </div>
                      </div>
                    </div>
    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">img :</label>
                          <input  type="file"
                           className="form-control"
                            accept='img/*' 
                            {...register('img')}
                            />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Location</label>
                          <input  type="text" 
                          className="form-control"
                           placeholder='Enter the location' 
                           {...register('location')}
                           />
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