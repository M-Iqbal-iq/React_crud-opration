import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


const UsersList = () => {
    const [users , setUsers] = useState([]);

    const getUserList = async () =>{
        try {
            const list =await axios.get('http://localhost:6003/user-list') 
            setUsers(list.data)
            // console.log(list.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUserList();
    },[])

    const handleDelete= async(id) =>{
        try {
            const del =await axios.delete(`http://localhost:6003/user-delete/${id}`);
            toast.warning(del.data.msg)
            getUserList()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container-fluid'>
            {/* Recent Activity Table */}
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>Users List </h5>
                    <NavLink to="/admin/user-form" className='btn btn-outline-success btn-sm '>Add New User</NavLink>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            users.map((user)=>{
                                return(
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <Link to={`user-edit/${user._id}`} className="badge bg-warning">Edit</Link> | 
                                            <div onClick={()=>handleDelete(user._id)} className="badge bg-danger"> del</div>
                                        </td>
                                    </tr>
                                )
                            })
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UsersList
