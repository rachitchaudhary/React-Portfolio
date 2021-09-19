import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../assets/img/carousal/slide1.webp'
import slide2 from '../../assets/img/carousal/slide2.webp'
import './carousal.style.css'
import ScrollDown from '../scroll-down/scroll-down.component';


const MyCarousal = () => {
    return (
        <div id="home" className = 'corousal'>
            <Carousel controls ={false} indicators interval={2500} >
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default MyCarousal;