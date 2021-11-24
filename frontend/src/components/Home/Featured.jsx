import React, { useEffect } from 'react'
import '../../css/style.css'
import { images } from '../../data/iterators'
import { Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button } from '@mui/material';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Featured = (props) => {
    useEffect(() => {
        Aos.init({duration: 600})
    }, [])
    return (
        <React.Fragment>
            <div className="featured-container">
                <div className="featured-title">
                    <h4>Featured Services</h4>
                    <hr />
                </div>
                <div className="featured-main">
                    {
                        images.map((value, index) => {
                            return( 
                                <Card data-aos="fade-right" data-aos-once="true" key={value.id} sx={{ maxWidth: 380, borderRadius: '10px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={value.url}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {value.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button color="info">
                                            Show More
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Featured