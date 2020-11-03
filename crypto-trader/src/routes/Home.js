import React from 'react';
import {HomeImageCarousel} from "../components/HomeImageCarousel"
import {HomeAbout}from "../components/HomeAbout";
import SignUpHome from "../components/SignUpHome";
import {Trending} from "../components/Trending";
import {HomeContainer} from "../Styles";


export const Home = () => (
    <HomeContainer>
        <HomeImageCarousel/>
        <SignUpHome/>
        <Trending/>
        <HomeAbout/>
    </HomeContainer>
)