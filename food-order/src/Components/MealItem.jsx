import React from 'react'
import { CurrencyConvert } from './Currencyconvert'
function MealItem({ meal }) {
    return (
        <li className='meal-item'>
            <article className='meal-box'>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>
                        {CurrencyConvert.format(meal.price)}
                    </p>
                    <p className='meal-item-desc'>{meal.description}</p>

                </div>
                <div><p className='meal-item-action'>
                    <button>Add to Cart</button></p></div>
            </article>
        </li>
    )
}

export default MealItem
