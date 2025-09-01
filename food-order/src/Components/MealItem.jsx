import React from 'react'
import { CurrencyConvert } from './Currencyconvert'
function MealItem({ meal }) {
    return (
        <li>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <div>
                    <h3>{meal.name}</h3>
                    <p>
                        {CurrencyConvert.format(meal.price)}
                    </p>
                    <p>{meal.description}</p>

                </div>
                <div><p>
                    <button>sumbit</button></p></div>
            </article>
        </li>
    )
}

export default MealItem
