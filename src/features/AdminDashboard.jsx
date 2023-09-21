import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
       <Link to='addhospital'><button className='btn btn-success'>Add Hospital</button></Link> 
        <Link to='addbed'><button className='btn btn-info'>+Add Bed</button></Link>
        <Outlet/>
    </div>
  )
}

export default AdminDashboard