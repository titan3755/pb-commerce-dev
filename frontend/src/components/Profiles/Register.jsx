import React, { useEffect, useContext } from 'react'
import UserCtx from '../Contexts/User'
import '../../css/style.css'

const RegisterMain = (props) => {
    return (
        <React.Fragment>
            <div className="register-main">
                <div className="register-side">

                </div>
                <div className="register-content">

                </div>
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
    return (
        <React.Fragment>
            <div className="register-container">
                {
                    user.loginState ? <RegisterRedirect /> : <RegisterMain />
                }
            </div>
        </React.Fragment>
    )
}

export default Register