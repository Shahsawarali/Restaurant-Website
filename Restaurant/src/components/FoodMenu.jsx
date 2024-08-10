import React from 'react'
import FoodCard from './FoodCard'

function FoodMenu({foodNames}) {
  return (
    <div className='food-menu-container'>
        <h1 className='food-menu-heading'>Food Menu</h1>

        <div className="food-menu-list">
            {foodNames.map((food, index) => (
                <FoodCard 
                key={index}
                title = {food.name}
                price={food.price}
                ingredients={food.ingredients}
                image={food.image}
               />
            )) }

        </div>
    </div>
  )
}

export default FoodMenu