import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            await axios.get("http://localhost:8080/courses")
                .then(res => {
                    setCourses(res.data)
                }).catch(error => {
                    console.error(error)
                })
        }
        getCourses()
    }, [])
    return (
        <div class="main-wrapper">


            <Header />

            <section className="home-slide d-flex align-items-center">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-7">
                            <div className="home-slide-face aos" data-aos="fade-up">
                                <div className="home-slide-text ">
                                    <h5>The Leader in Online Learning</h5>
                                    <h1>Engaging &amp; Accessible Online Courses For All</h1>
                                    <p>Own your future learning new skills online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-center">
                            <div className="girl-slide-img aos" data-aos="fade-up">
                                <img src="assets/img/object.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="section new-course">
                <div className="container">
                    <div className="section-header aos" data-aos="fade-up">
                        <div className="section-sub-head">
                            <span>What’s New</span>
                            <h2>Featured Courses</h2>
                        </div>
                        <div className="all-btn all-category d-flex align-items-center">
                            <a href="course-list.html" className="btn btn-primary">All Courses</a>
                        </div>
                    </div>
                    <div className="section-text aos" data-aos="fade-up">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                    </div>
                    <div className="course-feature">
                        <div className="row">
                            {courses.map(course => <div className="   justify-content-center col-md-4 d-flex">
                                <div className="course-box d-flex aos" data-aos="fade-up">
                                    <div className="product">
                                        <div className="product-img">
                                            <a href="course-details.html">
                                                <img className="img-fluid" alt src={course?.picture} />
                                            </a>
                                            <div className="price">
                                                <h3>${course?.cuttedPrice} <span>${course?.price}</span></h3>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="course-group d-flex">
                                                <div className="course-group-img d-flex">
                                                    <Link to={`/courses/${course?.title?.toLowerCase().split(' ').join("-")}`}><img src="assets/img/user/user2.jpg" alt className="img-fluid" /></Link>
                                                    <div className="course-name">
                                                        <h4><Link to={`/courses/${course?.title?.toLowerCase().split(' ').join("-")}`}>{course?.instructor}</Link></h4>
                                                        <p>Instructor</p>
                                                    </div>
                                                </div>
                                                <div className="course-share d-flex align-items-center justify-content-center">
                                                    <a href="#"><i className="fa-regular fa-heart" /></a>
                                                </div>
                                            </div>
                                            <h3 className="title instructor-text"><Link to={`/courses/${course?.title?.toLowerCase().split(' ').join("-")}`}>{course?.title}</Link></h3>
                                            <div className="course-info d-flex align-items-center">
                                                <div className="rating-img d-flex align-items-center">
                                                    <img src="assets/img/icon/icon-01.svg" alt />
                                                    <p> {course?.lesson}+</p>
                                                </div>
                                                <div className="course-view d-flex align-items-center">
                                                    <img src="assets/img/icon/icon-02.svg" alt />
                                                    <p>{course?.duration}hr</p>
                                                </div>
                                            </div>
                                            <div className="rating">
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star filled" />
                                                <i className="fas fa-star" />
                                                <span className="d-inline-block average-rating"><span>{course?.rating}</span> ({course?.totalRating})</span>
                                            </div>
                                            <div className="all-btn all-category d-flex align-items-center">
                                                <Link to={`/courses/${course?.title?.toLowerCase().split(' ').join("-")}`} className="btn btn-primary">BUY NOW</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}

                        </div>
                    </div>
                </div>
            </section>





            <div className="footer-top aos" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget footer-about">
                                <div className="footer-logo">
                                    <img src="assets/img/logo.svg" alt="logo" />
                                </div>
                                <div className="footer-about-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">For Instructor</h2>
                                <ul>
                                    <li><a href="instructor-profile.html">Profile</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="instructor-list.html">Instructor</a></li>
                                    <li><a href="deposit-instructor-dashboard.html"> Dashboard</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">For Student</h2>
                                <ul>
                                    <li><a href="student-profile.html">Profile</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="students-list.html">Student</a></li>
                                    <li><a href="deposit-student-dashboard.html"> Dashboard</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget footer-contact">
                                <h2 className="footer-title">News letter</h2>
                                <div className="news-letter">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Enter your email address" name="email" />
                                    </form>
                                </div>
                                <div className="footer-contact-info">
                                    <div className="footer-address">
                                        <img src="assets/img/icon/icon-20.svg" alt className="img-fluid" />
                                        <p> 3556 Beech Street, San Francisco,<br /> California, CA 94108 </p>
                                    </div>
                                    <p>
                                        <img src="assets/img/icon/icon-19.svg" alt className="img-fluid" />
                                        <a href="https://dreamslms.dreamguystech.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1e7a6c7b7f736d72736d5e7b667f736e727b307d7173">[email&nbsp;protected]</a>
                                    </p>
                                    <p className="mb-0">
                                        <img src="assets/img/icon/icon-21.svg" alt className="img-fluid" />
                                        +19 123-456-7890
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="privacy-policy">
                                    <ul>
                                        <li><a href="term-condition.html">Terms</a></li>
                                        <li><a href="privacy-policy.html">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="copyright-text">
                                    <p className="mb-0">© 2022 DreamsLMS. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Home