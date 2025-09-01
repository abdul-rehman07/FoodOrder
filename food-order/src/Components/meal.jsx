import React, { useEffect, useState } from 'react'
import MealItem from './MealItem.jsx';

function Meal() {
    const [mealData, setMealData] = useState([])
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch("http://localhost:3000/meals")
            if (!response.ok) {
                //..
            }
            const mealItem = await response.json();
            setMealData(mealItem)
        }
        fetchMeals()
    }, [])
    return (
        <ul>{mealData.map((meal) =>
            (<MealItem key={meal.id} meal={meal} />))}

        </ul>
    )
}

export default Meal
