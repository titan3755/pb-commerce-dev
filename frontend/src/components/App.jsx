import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Axios from 'axios'
import UserCtx from './Contexts/User'
import Home from './Home/Home'
import Shop from './Shop/Shop'
import Privacy from './Legal_Stuff/Privacy'
import Register from './Profiles/Register'
import Login from './Profiles/Login'
import Logout from './Profiles/Logout'

const App = (props) => {
    const [loginState, setLoginState] = useState(null)
    const auth = async () => {
        if (localStorage.getItem('jsonwebtoken')) {
            try {
                let res = await (await Axios.post('/users/authorization', {
                    token: localStorage.getItem('jsonwebtoken')
                })).data
                if (res.status_code == 200) {
                    setLoginState(res)
                }
                else {
                    setLoginState(null)
                }
            }
            catch (err) {
                setLoginState(null)
            }
        }
    }
    useEffect(() => {
        auth()
    }, [])
    return (
        <React.Fragment>
            <UserCtx.Provider value={{loginState, setLoginState}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/privacypolicy" element={<Privacy />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </UserCtx.Provider>
        </React.Fragment>
    )
}

export default App