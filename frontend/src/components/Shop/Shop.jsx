import React, { useState, useEffect, useContext } from 'react'
import UserCtx from '../Contexts/User'
import CartCtx from '../Contexts/Cart'
import Navbar from '../Navbars/Navbar'
import '../../css/style.css'

const Shop = (props) => {
    const user = useContext(UserCtx)
    const cart = useContext(CartCtx)
    useEffect(() => {
        console.log(cart.cartItems)
    })
    return (
        <React.Fragment>
            <Navbar />
            <div className="shop-container">
                <h4>{String(cart.cartItems)}</h4>
                <h4>Cart Items: {cart.cartItems.length}</h4>
                <button onClick={() => {cart.setCartItems(prev => [...prev, {title: 'condoms', desc: 'healthy condoms'}])}}>Add condoms</button>
                <button onClick={() => {cart.setCartItems(prev => [...prev, {title: 'ganja', desc: 'healthy ganja'}])}}>Add ganja</button>
                <button onClick={() => {cart.setCartItems([])}}>clear cart</button>
            </div>
        </React.Fragment>
    )
}

export default Shop