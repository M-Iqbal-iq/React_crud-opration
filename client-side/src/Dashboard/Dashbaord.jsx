import React, { useEffect } from 'react'
import Sidbare from './layout/Sidebar'
import DashbordCard from './pages/DashbordCard'
import Content from './layout/Content'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashbaord = () => {
    const navigate = useNavigate()
    
    useEffect(()=>{
const user = localStorage.getItem('user')
if(!user){
    navigate('/login')
}

},[])

    return (
        <div className='d-flex w-100 h-100 bg-light'>
            <Sidbare />
            <div className="flex-grow-1 p-3" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
               <Content /> 
            </div>

        </div>
    )
}

export default Dashbaord
