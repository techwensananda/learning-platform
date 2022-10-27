import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext'

const Login = () => {
    const { user, loginWithGoogle, loginUser, loginWithGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const [logindata, setloginData] = useState({

        email: "",
        password: "",
    })
    const handleData = (e) => {
        const { name, value } = e.target;
        setloginData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser(logindata.email, logindata.password)
            .then(res => {
                const user = res.user;
                console.log(res)
                navigate("/")
                // form.reset()
            })
            .catch(error => {
                console.error(error)
            })


    }

    useEffect(() => {
        if (user?.uid) {
            navigate("/")
        }
    }, [user])

    return (
        <div className="main-wrapper log-wrap">
            <div className="row">
                <div className="col-md-6 login-bg">
                    <div className="owl-carousel login-slide owl-theme">
                        <div className="welcome-login">
                            <div className="login-banner">
                                <img src="assets/img/login-img.png" className="img-fluid" alt="Logo" />
                            </div>
                            <div className="mentor-course text-center">
                                <h2>Welcome to <br />DreamsLMS Courses.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <div className="welcome-login">
                            <div className="login-banner">
                                <img src="assets/img/login-img.png" className="img-fluid" alt="Logo" />
                            </div>
                            <div className="mentor-course text-center">
                                <h2>Welcome to <br />DreamsLMS Courses.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <div className="welcome-login">
                            <div className="login-banner">
                                <img src="assets/img/login-img.png" className="img-fluid" alt="Logo" />
                            </div>
                            <div className="mentor-course text-center">
                                <h2>Welcome to <br />DreamsLMS Courses.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 login-wrap-bg">
                    <div className="login-wrapper">
                        <div className="loginbox">
                            <div className="w-100">
                                <div className="img-logo">
                                    <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                                    <div className="back-home">
                                        <Link to="/">Back to Home</Link>
                                    </div>
                                </div>
                                <h1>Sign into Your Account</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                        <input onChange={handleData} name='email' type="email" className="form-control" placeholder="Enter your email address" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">Password</label>
                                        <div className="pass-group">
                                            <input onChange={handleData} name='password' type="password" className="form-control pass-input" placeholder="Enter your password" />
                                            <span className="feather-eye toggle-password" />
                                        </div>
                                    </div>
                                    <div className="forgot">
                                        <span><a className="forgot-link" href="forgot-password.html">Forgot Password ?</a></span>
                                    </div>
                                    <div className="remember-me">
                                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
                                            <input type="checkbox" name="radio" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-start" type="submit">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="google-bg text-center">
                            <span><a href="#">Or sign in with</a></span>
                            <div className="sign-google">
                                <ul>
                                    <li onClick={loginWithGoogle} ><Link ><img src="assets/img/net-icon-01.png" className="img-fluid" alt="Logo" /> Sign In using Google</Link></li>
                                    <li onClick={loginWithGithub}><Link><img src="assets/img/net-icon-03.png" className="img-fluid" alt="Logo" />Sign In using Github</Link></li>
                                </ul>
                            </div>
                            <p className="mb-0">New User ? <Link to="/register">Create an Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login