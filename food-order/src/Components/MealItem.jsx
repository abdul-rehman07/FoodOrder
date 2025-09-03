import React from 'react'
import { CurrencyConvert } from './Currencyconvert'
import Button from './Button.jsx'
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
                    <Button>Add to Cart</Button></p></div>
            </article>
        </li>
    )
}

export default MealItem
