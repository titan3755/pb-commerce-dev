import React from 'react'
import Button from '@mui/material/Button'
import '../../css/style.css'


const Hero = (props) => {
    return (
        <React.Fragment>
            <div className="hero-container">
                <img src="https://images.pexels.com/photos/3490393/pexels-photo-3490393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="error" className="hero-bgpic" />
                <div className="hero-main">
                    <div className="hero-header">
                        <h5 className="hero-hd-t">PHOTOBYTES STORE</h5>
                    </div>
                    <div className="hero-headline">
                        <h1>Online shop for PhotoBytes Studios</h1>
                    </div>
                    <div className="hero-desc">
                        <p>Welcome to PhotoBytes Store, the all-in-one online shop for PhotoBytes Studios. You can find all of our products and services and order them here.</p>
                    </div>
                    <div className="hero-btn">
                        <Button variant="contained" size="large" sx={{borderRadius: '5px', backgroundColor: `royalblue`}} >
                            Get Started!
                        </Button>
                        <Button variant="contained" color="success" size="large" sx={{borderRadius: '5px', backgroundColor: `limegreen`}} >
                            About us
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero