import React, { useEffect, useState, useContext } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import UserCtx from '../Contexts/User'
import '../../css/style.css'

const Navbar = (props) => {
    const [mobileNavbar, setMobileNavbar] = useState(false)
    const [dimensions, setDimensions] = useState(null)
    const [hideNavbar, setHideNavbar]= useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const user = useContext(UserCtx)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getDimensions = () => {
        let { innerWidth: width, innerHeight: height} = window
        return [width, height]
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            setDimensions(getDimensions())
        })
        return () => {
            window.removeEventListener('resize', () => {
                setDimensions(getDimensions())
            })
        }
    }, [])
    useEffect(() => {
        let prevScroll = window.scrollY
        window.addEventListener('scroll', () => {
            let currentScroll = window.scrollY
            if (prevScroll > currentScroll) {
                setHideNavbar(false)
            }
            else {
                setHideNavbar(true)
            }
            prevScroll = currentScroll
        })
        return () => {
            window.removeEventListener('scroll', () => {
                let currentScroll = window.scrollY
                if (prevScroll > currentScroll) {
                    setHideNavbar(false)
                }
                else {
                    setHideNavbar(true)
                }
                prevScroll = currentScroll
            })
        }
    }, [])
    return (
        <React.Fragment>
            <nav className={hideNavbar ? "hidden-nav" : "navbar"}>
                <div className="nav-brand-section">
                    <Link to="/">
                        <div className="nav-brand">
                            PhotoBytes Shop
                        </div>
                    </Link>
                </div>
                <div className="nav-links-section">
                    <div className="nav-link-container">
                        <Link to="/shop">
                            <button className="nav-link">Shop</button>
                        </Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/about">
                            <button className="nav-link">About</button>
                        </Link>
                    </div>
                    <div className="nav-link-container">
                        <a href="https://www.youtube.com" rel="noopener noreferrer" className="nav-link">Blog</a>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/privacypolicy">
                            <button className="nav-link">Privacy</button>
                        </Link>
                    </div>
                    <div className="nav-link-container">
                        <button className="nav-link" onClick={handleClick}>Profile</button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={{zIndex: `99999`}}
                        >
                            {user.loginState
                                ?   <div className="profile-menus">
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Orders</MenuItem>
                                        <Link to="/logout">
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </Link>
                                    </div>
                                :   <div className="profile-menus">
                                        <Link to="/">
                                            <MenuItem onClick={handleClose}>Register</MenuItem>
                                        </Link>
                                        <Link to="/login">
                                            <MenuItem onClick={handleClose}>Login</MenuItem>
                                        </Link>
                                    </div>
                            }
                        </Menu>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar