import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const {user}= useSelector(state => state)
    
    return (
        <div>
            <h1>{user.FirstName}</h1>
        </div>
    )
}

export default Profile
