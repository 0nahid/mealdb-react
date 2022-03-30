import React from 'react';
import './Footer.css';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <p>&copy; Copyright by Pig'N PanCake 2022 | Toufiq Hasan Kiron</p>
            </div>
            <div className='footer-icons'>
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsTwitter></BsTwitter>
                <BsGithub></BsGithub>
                {/* <BsFacebook><a target="_blank" rel="noreferrer noopener" href="https://facebook.com/toufiqhasankiron"></a></BsFacebook>
                <BsInstagram><a target="_blank" rel="noreferrer noopener" href="https://instagram.com/toufiq_hasan_kiron"></a></BsInstagram>
                <BsTwitter><a target="_blank" rel="noreferrer noopener" href="https://twitter.com/ToufiqHaan0"></a></BsTwitter>
                <BsGithub><a target="_blank" rel="noreferrer noopener" href="https://github.com/kiron0"></a></BsGithub> */}
            </div>
        </div>
    );
};

export default Footer;