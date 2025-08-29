import React, { useEffect, useState } from 'react'

function Meal() {
    const [mealData, setMealData] = useState([])
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch("http://localhost:3000/meals")
            if (!response.ok) {
                //..
            }
            const mealItem = response.json();
            setMealData(mealItem)
        }
        fetchMeals()
    }, [])
    return (
        <ul>p</ul>
    )
}

export default Meal
