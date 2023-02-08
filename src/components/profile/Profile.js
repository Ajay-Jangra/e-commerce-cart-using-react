import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from 'react-redux';
import { selectUser } from "../../redux/reducers/userSlice.js";
import "./profile.css";
const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className='mainProfile'>
            <h2 >User Profile</h2>
            <div className="card">

                <h1>{user.email}</h1>

                <button className='logoutBtn' onClick={() => { auth.signOut(); navigate('/') }} >Logout</button>
                <Link to='/'>back to home</Link>
            </div>

        </div>
    )
}

export default Profile;