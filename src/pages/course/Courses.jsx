import axios from 'axios'
import moment from 'moment/moment'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import RightBarCourses from '../../components/RightBarCourses'

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            await axios.get("https://learning-platform-api.vercel.app/courses")
                .then(res => {
                    setCourses(res.data)
                }).catch(error => {
                    console.error(error)
                })
        }
        getCourses()
    }, [])
    console.log(courses)
    let coursename = 2

    return (
        <div class="main-wrapper">
            <Header />
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12 col-12 ">
                            <div className="breadcrumb-list ">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb ">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item" aria-current="page">Courses</li>

                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="course-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="course-feature">
                                <div className="row">

                                    {courses.map(course => <div className="   justify-content-center col-md-6 d-flex">
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
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="pagination lms-page">
                                        <li className="page-item prev">
                                            <a className="page-link" href="javascript:void(0);" tabIndex={-1}><i className="fas fa-angle-left" /></a>
                                        </li>
                                        <li className="page-item first-page active">
                                            <a className="page-link" href="javascript:void(0);">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="javascript:void(0);">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="javascript:void(0);">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="javascript:void(0);">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="javascript:void(0);">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a className="page-link" href="javascript:void(0);"><i className="fas fa-angle-right" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
                            <div className="card search-widget blog-search blog-widget">
                                <div className="card-body">
                                    <form className="search-form">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search..." className="form-control" />
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card post-widget blog-widget">
                                <div className="card-header">
                                    <h4 className="card-title">Courses</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="latest-posts">
                                        {courses.map(course =>

                                            <RightBarCourses course={course} />




                                        )}

                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Courses