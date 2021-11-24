import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../../css/style.css'

const FullLengthBanner = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    }, [])
    return (
        <React.Fragment>
            <div className="banner-container">
                <div className="banner-main">
                    <img src="https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?cs=tinysrgb&dpr=2&w=3840" alt="BnWImage" className="banner" />
                    <div className="banner-content">
                        <div className="banner-header">
                            <h4>PhotoBytes Shop</h4>
                        </div>
                        <div className="banner-header-main">
                            <h1>Check out Photobytes Studios' official store!</h1>
                        </div>
                        <div className="banner-desc">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia porro placeat veniam suscipit expedita eum perferendis architecto reprehenderit accusamus quaerat nostrum beatae debitis reiciendis deleniti eius, repellendus magni error incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis provident aut quos sequi numquam ea soluta! Iusto delectus tempore consequuntur, inventore impedit consequatur non eos enim tempora quas nobis?</p>
                        </div>
                        <div className="banner-btn">
                            <Button variant="outlined">
                                More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FullLengthBanner