import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb} = props.meal;

    const navigate = useNavigate();
    const mealDetails = () => {
        navigate(`/meals/${idMeal}`);
    }
    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt={strMeal} />
            <h3>{strMeal}</h3>
            <div className='meal-btn'>
                <button onClick={mealDetails}>Details</button>
            </div>
        </div>
    );
};

export default Meal;