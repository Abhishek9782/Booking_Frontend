import { useContext } from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, error, loading, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  // Logout Function
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" })
    navigate('/user-login')

  }

  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <span className="logo" title='Go to Home Page'>Abhi Booking</span>
        </Link>
        {!user && <div className="navItems">
          <button className="navButton registerButton" ><Link className='link' to="/user-register">Register</Link></button>
          <button className="navButton loginButton"><Link className='link' to="user-login">Login</Link></button>
        </div>}{
          user && (
            <>
              <div className="ifuserlogin">
                <h4>Welcome {user.username}</h4>
                <button onClick={handleLogout}>Logout</button>

              </div>
            </>

          )
        }
      </div>
    </div>
  )
}

export default Navbar
