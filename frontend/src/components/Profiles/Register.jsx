import React, { useState, useEffect, useContext } from 'react'
import UserCtx from '../Contexts/User'
import '../../css/style.css'

const RegisterMain = (props) => {
    return (
        <React.Fragment>
            <div className="register-main">
                success!
            </div>
        </React.Fragment>
    )
}

const RegisterRedirect = (props) => {
    useEffect(() => {
        window.location.href = "/"
    }, [])
    return (
        <React.Fragment>

        </React.Fragment>
    )
}

const Register = (props) => {
    const user = useContext(UserCtx)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (user.loginState) {
            setLogin(true)
        }
    }, [])
    return (
        <React.Fragment>
            <div className="register-container">
                {
                    login ? <RegisterRedirect /> : <RegisterMain />
                }
            </div>
        </React.Fragment>
    )
}

export default Register