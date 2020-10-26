import React from 'react';
import {HomeImageCarousel} from "../components/HomeImageCarousel"
import {HomeAbout}from "../components/HomeAbout";
import SignUp from "../components/SignUp";
import {Trending} from "../components/Trending";
import {HomeContainer} from "../Styles";


export const Home = () => (
    <HomeContainer>
        <HomeImageCarousel/>
        <SignUp/>
        <Trending/>
        <HomeAbout/>
    </HomeContainer>
)