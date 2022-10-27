import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../contexts/UserContext';
import usericon from '../../assets/usericon.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Register = () => {
    const navigate = useNavigate()
    const { user, createUser, updateProfileUser, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const [registerdata, setRegisterData] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    const handleData = (e) => {
        const { name, value } = e.target;
        setRegisterData(prev => ({ ...prev, [name]: value }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        createUser(registerdata.email, registerdata.password)
            .then(res => {
                const user = res.user;
                const formData = new FormData();


                formData.append("avatar", selectedImages[0].file);


                axios.post("http://localhost:8080/profile", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then((res) => {
                        console.log(res?.data?.result?.filename);
                        const profile = {
                            displayName: registerdata.fullname, photoURL: `http://localhost:8080/${res?.data?.result?.filename}`
                        }
                        updateProfileUser(profile)
                    });
                navigate("/")



            })
            .catch(error => {
                console.error(error)
            })


    }
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = async (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        const imagesArray = [];

        selectedFilesArray.map((file) => {

            imagesArray.push({
                name: file.name,
                url: URL.createObjectURL(file),
                file: file,
            });
        });

        console.log(imagesArray);

        setSelectedImages(imagesArray);

        // FOR BUG IN CHROME
        event.target.value = "";
        // const formData = new FormData();


        // formData.append("avatar", selectedImages[0].file);


        // await axios.post("http://localhost:8080/profile", formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // })
        //     .then((res) => {
        //         console.log(res);
        //     });
    };

    useEffect(() => {
        if (user?.uid) {
            navigate("/")
        }
    }, [user])
    const uploadToserver = () => {
        const formData = new FormData();

        // for (let j = 0; j < selectedImages.length; j++) {
        //     formData.append("cv", selectedImages[j].file);
        // }

        // axios
        //     .post("http://localhost:8080/api/v1/auth/fileupload", formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     });
    };
    console.log(registerdata.fullname)
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
                            <div className="img-logo">
                                <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                                <div className="back-home">
                                    <Link to="/">Back to Home</Link>
                                </div>
                            </div>
                            <h1>Sign up</h1>

                            <div className="text-center">

                                <label>
                                    <img src={selectedImages.length > 0 ? selectedImages[0].url : usericon} className="upload-img img-fluid  rounded-pill" alt="Logo" />
                                    <br />
                                    <span>Upload Images</span>
                                    <input
                                        className='d-none'
                                        type="file"
                                        name="images"
                                        onChange={onSelectFile}

                                        accept="image/png , image/jpeg, image/webp"
                                    />
                                </label>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-control-label">Full Name</label>
                                    <input onChange={handleData} type="text" name='fullname' className="form-control" placeholder="Enter your Full Name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Email</label>
                                    <input onChange={handleData} type="email" name='email' className="form-control" placeholder="Enter your email address" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Password</label>
                                    <div className="pass-group" id="passwordInput">
                                        <input onChange={handleData} type="password" name='password' className="form-control pass-input" placeholder="Enter your password" />
                                        <span className="toggle-password feather-eye" />
                                        <span className="pass-checked"><i className="feather-check" /></span>
                                    </div>
                                    <div className="password-strength" id="passwordStrength">
                                        <span id="poor" />
                                        <span id="weak" />
                                        <span id="strong" />
                                        <span id="heavy" />
                                    </div>
                                    <div id="passwordInfo" />
                                </div>
                                <div className="form-check remember-me">
                                    <label className="form-check-label mb-0">
                                        <input className="form-check-input" type="checkbox" name="remember" /> I agree to the <a href="term-condition.html">Terms of Service</a> and <a href="privacy-policy.html">Privacy Policy.</a>
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-start" type="submit">Create Account</button>
                                </div>
                            </form>
                        </div>
                        <div className="google-bg text-center">
                            <span><a href="#">Or sign in with</a></span>
                            <div className="sign-google">
                                <ul>
                                    <li onClick={loginWithGoogle} ><Link ><img src="assets/img/net-icon-01.png" className="img-fluid" alt="Logo" /> Sign In using Google</Link></li>
                                    <li onClick={loginWithGithub}><Link ><img src="assets/img/net-icon-03.png" className="img-fluid" alt="Logo" />Sign In using Github</Link></li>
                                </ul>
                            </div>
                            <p className="mb-0">Already have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register