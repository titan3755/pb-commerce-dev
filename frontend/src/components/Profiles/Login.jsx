import React, { useEffect, useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'
import UserCtx from '../Contexts/User'
import '../../css/style.css'

const loginHandler = async (event) => {
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value
    let response
    try {
        response = await (await Axios.post('/users/login', {
            username: username,
            password: password
        })).data
        localStorage.setItem('jsonwebtoken', response.jwt)
        window.location.href = "/"
    }
    catch (err) {
        response = err
    }
}

const LoginForm = (props) => {
    const [loginRedirect, setLoginRedirect] = useState(false)
    const authorizer = useContext(UserCtx)
    useEffect(() => {
        if (authorizer.loginState) {
            setLoginRedirect(true)
        }
        else {
            setLoginRedirect(false)
        }
    }, [authorizer.loginState])
    if (loginRedirect) {
        return <Navigate to="/" />
    }
    else {
        return (
            <React.Fragment>
                <div className="login-main">
                    <div className="login-side">
                        <div className="login-brand">
                            <FontAwesomeIcon icon={faStore} />
                            <h4>PhotoBytes EShop&trade;</h4>
                        </div>
                        <div className="signup-redirect-container">
                            <div className="signup-headline">
                                <h1>Welcome Back!</h1>
                            </div>
                            <div className="signup-desc">
                                <p>Got no existing account? Register for a new PhotoBytes ECommerce account via the button below.</p>
                            </div>
                            <div className="signup-redirect-btn">
                                <button className="signup-redirect">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="login-form">
                        <div className="login-headline">
                            <h1>Login to account</h1>
                        </div>
                        <div className="login-desc">
                            <p>Use your username and password to login</p>
                        </div>
                        <form action="." onSubmit={loginHandler}>
                            <div className="login-inputs">
                                <div className="login-input-container">
                                    <FontAwesomeIcon icon={faUser} /> 
                                    <input type="text" name="username" placeholder="Username" required />
                                </div>
                                <div className="login-input-container">
                                    <FontAwesomeIcon icon={faUnlock} /> 
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="login-submit">
                                <button className="login-submit-btn" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm