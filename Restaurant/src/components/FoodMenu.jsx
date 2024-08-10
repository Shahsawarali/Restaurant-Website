import React from 'react'

function FoodMenu({foodNames}) {
  return (
    <div className='food-menu-container'>
        <h1 className='food-menu-heading'>Food Menu</h1>

        <div className="food-menu-list">
            {foodNames.map((food, index) => (
                <>
                <p>{food.name}</p>
                <img src={food.image} alt={food.name} />
                </>
            )) }

        </div>
    </div>
  )
}

export default FoodMenu