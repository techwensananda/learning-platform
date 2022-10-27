import React from 'react'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'
import usericon from '../assets/usericon.jpg'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import { useEffect } from 'react'


const Header = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [theme, setTheme] = useState("light-theme")
    const handleTheme = event => {
        theme == "light-theme" ? setTheme("night-mode") : setTheme("light-theme")
    }


    useEffect(() => {
        document.body.className = theme
    }, [theme])

    const location = useLocation();
    const pathname = location.pathname;
    console.log(user?.uid)
    return (
        <header className="header header-page">
            <div className="header-fixed">
                <nav className="navbar navbar-expand-lg header-nav scroll-sticky">
                    <div className="container ">
                        <div className="navbar-header">
                            <a id="mobile_btn" href="javascript:void(0);">
                                <span className="bar-icon">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </a>
                            <Link to="/" className="navbar-brand logo">
                                <img src={logo} className="img-fluid" alt="Logo" />
                            </Link>
                        </div>
                        <div className="main-menu-wrapper">
                            <div className="menu-header">
                                <a href="index.html" className="menu-logo">
                                    <img title={user?.displayName
                                    } src={user ? user?.photoURL : usericon} className="img-fluid" alt="Logo" />
                                </a>
                                <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                    <i className="fas fa-times" />
                                </a>
                            </div>
                            <ul className="main-nav">
                                <li className={pathname == "/" && "active"}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={pathname == "/courses" && "active"}>
                                    <Link to="/courses">My Course</Link>
                                </li>
                                {/* <li>
                              <a href="instructor-course.html">My Course</a>
                          </li> */}
                                <li className={pathname == "/blog" && "active"}>
                                    <Link to="/blog">Blog</Link>
                                </li >

                                <li className={pathname == "/faq" && "active"}><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                        <ul className="nav header-navbar-rht">
                            {user?.uid && <span className="user-img">
                                <img title={user?.displayName
                                } src={user ? user?.photoURL : usericon} alt />
                                <span className="status online" />
                            </span>}
                            <li className="nav-item">
                                {!user?.uid ? <> <Link to="/login" className="nav-link header-login" >Signin</Link>  <Link to="/register" className="nav-link header-sign" >Register</Link> </> :
                                    <Link onClick={signOutUser} className="nav-link header-login">Sign Out</Link>}
                            </li>
                            {/* <li className="nav-item">
                                {!user?.email ? <Link to="/login" className="nav-link header-sign" >Signin</Link> :
                                    <Link onClick={signOutUser} className="nav-link header-sign">Sign Out</Link>}
                            </li> */}
                            <li className=" night-mode">
                                <input type="checkbox" onChange={() => handleTheme()} className="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className="checkbox-label">
                                    <i className="fas fa-moon" />
                                    <i className="fas fa-sun" />
                                    <span className="ball" />
                                </label>
                            </li>
                        </ul>
                    </div>
                </nav></div>
        </header>

    )
}

export default Header