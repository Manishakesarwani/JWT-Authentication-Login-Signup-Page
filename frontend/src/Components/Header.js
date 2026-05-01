import React from 'react'
import { Link } from 'react-router-dom'
import { useUserAuthentication } from '../hooks/useUserAuthentication'


const Header = () => {

    const {user, dispatch} = useUserAuthentication();


    const handleLogout=()=>{
        localStorage.removeItem("user");
        dispatch({type: "LOGOUT"});
    }
  return (
    <div className='header'>
        <Link to="/">
            <h1><span>App Name</span></h1>
        </Link>
        <nav>
            <div>
                {user && <span>{user.email}</span>}
                {user && <button onClick={handleLogout}>Logout</button>}
            </div>   
            <div>
                {!user && <Link to="/login">Login</Link>}
                {!user && <Link to="/signup">SignUp</Link>}
            </div>
        </nav>
    </div>
  )
}

export default Header