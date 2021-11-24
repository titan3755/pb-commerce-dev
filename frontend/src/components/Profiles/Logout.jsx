import React, { useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserCtx from '../Contexts/User'

const Logout = (props) => {
    const [logout, setLogout] = useState('initial')
    const user = useContext(UserCtx)
    useEffect(() => {
        if (localStorage.getItem('jsonwebtoken')) {
            localStorage.removeItem('jsonwebtoken')
            user.setLoginState(null)
            setLogout(true)
        }
        else {
            setLogout(false)
        }
    }, [])
    if (logout) {
        return <Navigate to="/login" />
    }
    else if (!logout) {
        return <Navigate to="/" />
    }
    return ''
}

export default Logout