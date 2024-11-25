import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// Validation schema
const schema = yup.object().shape({
  Book_Name: yup.string().required('Book Name is required').min(2, 'Too short').max(20, 'Too long'),
  img: yup
    .mixed()
    .required('Image is required')
    .test('fileType', 'Invalid file type', (value) => {
      return value && value[0] && ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type);
    }),
  Author_Name: yup.string().required('Author Name is required'),
  Genres: yup.string().required('Genre is required'),
  Amount: yup
    .string()
    .required('Amount is required')
    .matches(/^\d+$/, 'Amount must be a number'),
  contact: yup
    .string()
    .required('Contact is required')
    .matches(/^\d{10}$/, 'Contact must be a 10-digit number'),
});

function BookReg() {
  const [dataId, setDataId] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setDataId(parsedData);
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async (data) => {
    if (!dataId || !dataId._id) {
      alert('User ID not found. Please log in again.');
      return;
    }

    const formData = new FormData();
    formData.append('userId', dataId._id);
    formData.append('Book_Name', data.Book_Name);
    formData.append('img', data.img[0]); // File handling
    formData.append('Author_Name', data.Author_Name);
    formData.append('contact', data.contact);
    formData.append('Genres', data.Genres);
    formData.append('Amount', data.Amount);

    try {
      const response = await axios.post('http://localhost:8000/api/user-bookreg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.code === 200) {
        alert('Registration of the book is completed!');
        reset();
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container_Bookform">
      <div className="row">
        <div className="col-lg-6 mx-auto text-center mt-3">
          <h1 className="">
            Book<span className="text-primary"> Form</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 mx-auto mt-4 mb-4 form-style-Book">
          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <input
                type="text"
                className="form-control mb-3 mt-3"
                placeholder="Book Name"
                {...register('Book_Name')}
              />
              {errors.Book_Name && <p className="text-danger">{errors.Book_Name.message}</p>}
            </div>
            <div>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Author Name"
                {...register('Author_Name')}
              />
              {errors.Author_Name && <p className="text-danger">{errors.Author_Name.message}</p>}
            </div>
            <div>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Genres"
                {...register('Genres')}
              />
              {errors.Genres && <p className="text-danger">{errors.Genres.message}</p>}
            </div>
            <div>
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Enter the Amount"
                {...register('Amount')}
              />
              {errors.Amount && <p className="text-danger">{errors.Amount.message}</p>}
            </div>
            <div>
              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Enter Your Contact Number"
                {...register('contact')}
              />
              {errors.contact && <p className="text-danger">{errors.contact.message}</p>}
            </div>
            <div>
              <input
                type="file"
                className="form-control mb-3"
                accept=".jpeg,.jpg,.png"
                {...register('img')}
              />
              {errors.img && <p className="text-danger">{errors.img.message}</p>}
            </div>
            <div>
              <input
                type="submit"
                value="SUBMIT"
                className="form-control mb-3 fs-5 bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookReg;
