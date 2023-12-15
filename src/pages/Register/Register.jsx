import { useContext, useState } from "react";
import "./Register.css"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
const Register = () => {
    const [credential, setCredential] = useState({
        username: undefined,
        email: undefined,
        mobile: undefined,
        password: undefined
    });
    const { error, data, loading, dispatch } = useContext(AuthContext)
    //  State Manegine  ;- user input fiels 

    const handleRegister = (e) => {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    // Here we Handle Register user 

    const handleRegisterUser = (e) => {
        e.preventDefault();
        alert(" we work Here ")

    }

    return (
        <div className="registerBackground">
            <div className="registerBox">
                <form action="" className="form">
                    <div className="image">
                        <img src="https://i.pinimg.com/474x/5d/69/42/5d6942c6dff12bd3f960eb30c5fdd0f9.jpg" alt="" />
                    </div>
                    <h3>Please Fill Your Details </h3>

                    <div className="all-register-filled">
                        <input
                            type="text"
                            className="form-control fields"
                            placeholder="Enter Here Your Name"
                            id="username"
                            onChange={handleRegister}
                        />



                        <input
                            type="text"
                            className="form-control fields"
                            placeholder="Enter Here Your E-mail "
                            onChange={handleRegister}
                            id="email"
                        />

                        <input
                            type="text"
                            className="form-control fields"
                            placeholder="Enter Here Your Phone Number "
                            onChange={handleRegister}
                            id="mobile"
                        />

                        <input
                            type="text"
                            name=""
                            id="password"
                            className="form-control fields"
                            placeholder="Enter Here Your Password"
                            onChange={handleRegister}
                        />



                    </div>
                    <button
                        className="btn btn-primary registerButton mt-3"
                        onClick={handleRegisterUser}
                    >Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register

