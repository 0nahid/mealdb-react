import React from 'react';
// import Logo from './favicon.png'
import { RiMenu4Fill } from "react-icons/ri";
import './Header.css'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import {SiFoodpanda} from 'react-icons/si';

const Header = () => {
    return (
        <div className='header'>
            {/* <img src={Logo} alt="" /> */}
            <SiFoodpanda className='logo'></SiFoodpanda>
            <h2 className='header-title'><Link to="/">Pig'N PanCake</Link></h2>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className='checkbtn'>
                    <RiMenu4Fill className='nav-bar-icon'></RiMenu4Fill>
                    </label>
                    <ul className='navbar-items'>
                        <CustomLink to="/home" className='nav-link'>Home</CustomLink>
                        <CustomLink to="/meals" className='nav-link'>Meals</CustomLink>
                        <CustomLink to="/about" className='nav-link'>About</CustomLink>
                    </ul>
                </nav>
        </div>
    );
};

export default Header;