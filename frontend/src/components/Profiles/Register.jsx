import React, { useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import UserCtx from '../Contexts/User'
import { registrationCards } from '../../data/iterators'
import '../../css/style.css'

const InfoCards = (props) => {
    return (
        <React.Fragment>
            <div className="register-card-main">
                <div className="register-card-icon-container">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <div className="register-card-content-container">
                    <div className="register-card-content-title">
                        <h3>{props.info.title}</h3>
                    </div>
                    <div className="register-card-content-desc">
                        <p>{props.info.desc}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const RegisterForms = (props) => {
    return (
        <React.Fragment>
            <div className="register-forms-header-container">

            </div>
            <div className="register-forms-main">

            </div>
            <div className="register-forms-submission">
                
            </div>
        </React.Fragment>
    )
}

const RegisterMain = (props) => {
    return (
        <React.Fragment>
            <div className="register-main">
                <div className="register-side">
                    {
                        registrationCards.map(value => <InfoCards key={value.id} icon={value.icon} info={value} />)
                    }
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