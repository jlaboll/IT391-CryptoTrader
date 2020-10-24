import React from 'react';
import {Carousel} from "react-bootstrap";
//import styled from "styled-components";
import image1 from "../img/105575331-1542244532670gettyimages-1035974108.jpeg";
import image2 from "../img/shutterstock_image-1-1.jpg";
import image3 from "../img/what-is-margin-trading-cryptocurrency.png";

// const HomeImageCarousel = styled(Carousel)`
//   .item{
//   }
// `;

export const Home = () => (
    <Carousel>
        <Carousel.Item>
            <img className="home-image-1" src={image1} alt="cryptocurrency-coins"/>
            <Carousel.Caption>
                <h3>Cryptocurrency</h3>
                <p>test1</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="home-image-2" src={image2} alt="bitcoin-value-graph"/>
            <Carousel.Caption>
                <h3>Trading</h3>
                <p>test2</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="home-image-3" src={image3} alt="coin-value-art"/>
            <Carousel.Caption>
                <h3>Simulation</h3>
                <p>test3</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)