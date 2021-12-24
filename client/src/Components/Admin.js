import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Admin = () => {
    const {user} = useSelector(state => state)
    return (
        < div>  
        {
            user.userRole==='Manager'?<Navigate to='/add'/>:<Navigate to='/'/>
        }  
        </div>
    )
}

export default Admin
