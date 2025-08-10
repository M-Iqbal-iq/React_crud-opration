import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/admin/dashboard')
    }
  }, [])

  const [cridencial, setCridencial] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCridencial({ ...cridencial, [name]: value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const res = await axios.post(`http://localhost:6003/login`, cridencial)
      toast.success(res.data.msg)
      // console.log(res)

      setCridencial({ email: "", password: "" }); // Reset form

      // Redirect or perform other actions after successful login;
      localStorage.setItem("user", JSON.stringify(res.data.userin));

      navigate("/admin/dashboard"); // Redirect to dashboard or home page


    } catch (error) {
      // toast.error(error.response?.data?.msg || "Login failed")
      console.log(error);
      toast.error(error.response.data.msg)
    }

  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <div className="card-body">
                <form onSubmit={handleSubmit} className='shadow-lg rounded p-5'>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={cridencial.email}
                      onChange={handleChange}
                      name='email'
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={cridencial.password}
                      onChange={handleChange}
                      name='password'
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
