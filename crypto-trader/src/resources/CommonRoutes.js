import {BsGraphUp, BsHouseFill, BsInfoCircleFill, BsPencilSquare, BsPersonFill} from "react-icons/all";
import React from "react";

let items;
items = [
    {
        path: '/',
        name: 'Home',
        id: 'home_item_clickable',
        as: <BsHouseFill/>,
        key: 1
    },
    {
        path: '/about',
        name: 'About',
        id: 'about_item_clickable',
        as: <BsInfoCircleFill/>,
        key: 2
    },
    {
        path: '/live-trading',
        name: 'Trade',
        id: 'trade_item_clickable',
        as: <BsGraphUp/>,
        key: 3
    },
    {
        path: '/login',
        name: 'Login',
        id: 'login_item_clickable',
        as: <BsPersonFill/>,
        key: 4
    },
    {
        path: '/signup',
        name: 'Sign Up',
        id: 'sign_up_item_clickable',
        as: <BsPencilSquare/>,
        key: 5
    },
// { //Not being used, as this is an error page.
//     path: '/NoMatch',
//     name: 'No Match',
//     as: <BsFillXCircleFill/>,
//     key: 4
// },
]
export default items;