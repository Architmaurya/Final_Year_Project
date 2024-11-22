import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './comp/Landing/Home';
import Nav from './comp/Landing/Nav';
import Category from './comp/Landing/Category';
import Footer from './comp/Landing/Footer';
import About from './comp/Landing/About';
import Contact from './comp/Landing/Contact';
import Register from './comp/user/Register';
import Adminlog from './comp/Admin/Adminlog';
import UserLogIn from './comp/user/UserLogIn';
import AdminDashboard from './comp/Admin/AdminDashboard';
import UserDashboard from './comp/user/UserDashboard';
import UserList from './comp/Admin/UserList';
import BookList from './comp/Admin/BookList';
import BookReg from './comp/user/BookReg';

function App() {
  const location = useLocation();
  const [role, setRole] = useState('');

  useEffect(() => {
    const userType = JSON.parse(localStorage.getItem('userType'));
    setRole(userType || '');
  }, [location.pathname]); // Use pathname to detect route changes.

  return (
    <>
      <Nav />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admin/logIn" element={<Adminlog />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/user/login" element={<UserLogIn />} />
        <Route path="/user/bookform" element={<BookReg />} />
       
        {/* Admin Routes */}
        {role === 'admin' && (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/userlist" element={<UserList />} />
            <Route path="/admin/booklist" element={<BookList />} />
          </>
        )}

        {/* User Routes */}
        {role === 'user' && (
          <>
            <Route path="/user" element={<UserDashboard />} />
           

            
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

function WrapperRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrapperRouter;
