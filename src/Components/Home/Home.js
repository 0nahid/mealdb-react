import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import {SiFoodpanda} from 'react-icons/si';

const Home = () => {
    return (
        <div className='home'>
          <div className='home-container'>
            <h1>
              Welcome to Pig'N PanCake <SiFoodpanda></SiFoodpanda>
            </h1>
            <Link
              to='/meals'
              className='explore-btn'
            >
              Explore Meals
            </Link>
          </div>
        </div>
      )
    };

export default Home;