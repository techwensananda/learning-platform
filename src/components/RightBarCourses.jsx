import React from 'react'
import { Link } from 'react-router-dom'

const RightBarCourses = ({course}) => {
  return (
      <li>
          <div className="post-thumb">
              <Link to={`/courses/${course?.title?.toLowerCase().split(' ').join("-")}`} >
                  <img className="img-fluid" src={course?.picture} alt />
              </Link>
          </div>
          <div className="post-info">
              <h4>
                  <Link to={`/courses/${course?.title?.toLowerCase().split(' ').join("-")}`} >{course?.title.slice(0, 35)}...</Link>
              </h4>
              <p><img className="img-fluid" src="assets/img/icon/icon-22.svg" alt />{course?.realeaseDate.slice(0, 10)}


              </p>
          </div>
      </li>
  )
}

export default RightBarCourses