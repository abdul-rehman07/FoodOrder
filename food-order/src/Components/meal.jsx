import React from 'react'

function Meal() {
    async function fetchMeals() {
        const response = await fetch("http://localhost:3000/meals")
        if (!response.ok) {
            //..
        }
    }

    return (
        <ul></ul>
    )
}

export default Meal
