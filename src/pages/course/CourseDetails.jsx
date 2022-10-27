import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import RightBarCourses from '../../components/RightBarCourses';

const CourseDetails = () => {

    const { coursename } = useParams();



    const [courseDetails, setCourseDetails] = useState({})

    useEffect(() => {
        const getCourseDetails = async () => {
            await axios.get(`http://localhost:8080/courses/${coursename}`)
                .then(res => {
                    setCourseDetails(res.data)
                }).catch(error => {
                    console.error(error)
                })
        }
        getCourseDetails()
    }, [coursename])

    console.log(courseDetails)

    return (
        <div class="main-wrapper">
            <Header />
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="breadcrumb-list">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item" aria-current="page">Pages</li>
                                        <li className="breadcrumb-item" aria-current="page">Blog List</li>
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
                            <div className="blog">
                                <div className="blog-image">
                                    <a href="blog-details.html"><img className="img-fluid" src={courseDetails?.picture} alt="Post Image" /></a>
                                </div>
                                <div className="blog-info clearfix">
                                    <div className="post-left">
                                        <ul>
                                            <li>
                                                <div className="post-author">
                                                    <a href="instructor-profile.html"><img src="assets/img/user/user.jpg" alt="Post Author" /> <span>Ruby Perrin</span></a>
                                                </div>
                                            </li>
                                            <li><img className="img-fluid" src={"assets/img/icon/icon-22.svg"} alt />April 20, 2022</li>
                                            <li><img className="img-fluid" src="assets/img/icon/icon-23.svg" alt />Programming, Web Design</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className="blog-title"><a href="blog-details.html">{courseDetails?.title}</a></h3>
                                <div className="blog-content blog-read">
                                    <p>{courseDetails?.descripton}</p>
                                    <Link to={`/order/${coursename}`} className="read-more btn btn-primary">Get premium access</Link>
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
                                    <h4 className="card-title">Recent Posts</h4>
                                </div>
                                <div className="card-body">
                                    {/* <ul className="latest-posts">
                                        {courses.map(course =>

                                            <RightBarCourses course={course} />




                                        )}
                                    </ul> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default CourseDetails