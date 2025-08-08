import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const UserEdit = () => {
const navigate =  useNavigate()
    const [userEdit , setUserEdit ] = useState({
        name:"",
        email:"",
        password:"",
    });
    
    const {id} = useParams();
    const getUserForEdit = async () =>{
        try {
            const userData = await axios.get(`http://localhost:6003/user-edit/${id}`)
            setUserEdit(userData.data)
            console.log(userData)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUserForEdit()
    },[]);

    

const handleChange = (e) =>{
   const {name, value} = e.target;
   setUserEdit({...userEdit,[name]:value});
}

    const handleSubmit = async (e) =>{
  e.preventDefault();
    // console.log('User upated:', userEdit);
    try {
      const res = await axios.post(`http://localhost:6003/user-update/${id}`,userEdit)
      console.log(res.data)
      toast.success('User Update Successfully.');
      navigate('/user-list')

    } catch (error) {
      console.log(error)
    }
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Update User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    value={userEdit.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    value={userEdit.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    value={userEdit.password} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
