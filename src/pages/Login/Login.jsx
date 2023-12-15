import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useState } from "react";
import axios from "axios"

const Login = () => {
    const [credential, setCredential] = useState({
        email: undefined,
        password: undefined
    });
    const [dbError, setDbError] = useState("")
    const { user, error, loading, dispatch } = useContext(AuthContext);
    console.log("error is ", error)
    const navigate = useNavigate()
    //  Here we state mangeing 
    const handleChange = (e) => {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
    //  Login handle here 
    const HandleLogin = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post('/auth/login', credential)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            if (res.data) {
                navigate('/')
            }

        } catch (err) {
            dispatch({ type: "LOGIN_FAILD", payload: err.response.data })
            setDbError(err.response.data)
        }



    }



    return (
        <div className="loginBackground">
            <div className="loginBox">
                <form action="" className="form">
                    <div className="image">
                        <img src="https://i.pinimg.com/474x/5d/69/42/5d6942c6dff12bd3f960eb30c5fdd0f9.jpg" alt="" />
                    </div>
                    <h3>Please Login Here</h3>

                    {

                        dbError && <div className="error" style={{ textAlign: "center", width: "100%", color: "red" }}>
                            <span >{dbError}</span>
                        </div>

                    }

                    <label htmlFor="" className="form-label">Enter Here Your username</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        id="username"
                        required

                    />
                    <label htmlFor="" className="form-label">Enter Here Your Password</label>

                    <input
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        id="password"

                    />
                    <button
                        className="btn btn-primary loginButton"
                        onClick={HandleLogin}
                        disabled={loading}
                    >Login</button>

                    <div className="link">
                        <Link to="/user-register">Register Here</Link>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
