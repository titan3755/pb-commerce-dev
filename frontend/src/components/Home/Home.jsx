import React from 'react'
import Navbar from '../Navbars/Navbar'
import Hero from './Hero'
import Featured from './Featured'
import Banner from './FullBanner'

const Home = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
            <Featured />
            <Banner />
        </React.Fragment>
    )
}

export default Home