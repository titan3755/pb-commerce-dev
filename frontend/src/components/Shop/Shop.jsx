import React, { useState, useEffect, useContext } from 'react'
import UserCtx from '../Contexts/User'
import Navbar from '../Navbars/Navbar'
import '../../css/style.css'

const Shop = (props) => {
    const user = useContext(UserCtx)
    return (
        <React.Fragment>
            <Navbar />
            <div className="shop-container">
                
            </div>
        </React.Fragment>
    )
}

export default Shop