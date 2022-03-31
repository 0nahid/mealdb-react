import React from 'react';
import './Footer.css';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <p>&copy; All rights reserved by Pig'N PanCake 2022 | Toufiq Hasan Kiron</p>
            </div>
            <div className='footer-icons'>
                <a target="_blank" rel="noreferrer noopener" href="https://facebook.com/toufiqhasankiron"><BsFacebook className='fb'></BsFacebook></a>

                <a target="_blank" rel="noreferrer noopener" href="https://instagram.com/toufiq_hasan_kiron"><BsInstagram className='inst'></BsInstagram></a>

                <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/ToufiqHasan0"><BsTwitter className='twit'></BsTwitter></a>

                <a target="_blank" rel="noreferrer noopener" href="https://github.com/kiron0"><BsGithub className='git'></BsGithub></a>
            </div>
        </div>
    );
};

export default Footer;