import React, { useState, useEffect, useContext } from 'react'
import UserCtx from '../Contexts/User'
import Navbar from '../Navbars/Navbar'

const Shop = (props) => {
    const user = useContext(UserCtx)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (user.loginState) {
            setLogin(true)
        }
    }, [])
    return (
        <React.Fragment>
            <Navbar />
            <div className="shop-container">
                shop
            </div>
        </React.Fragment>
    )
}

export default Shop