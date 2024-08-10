import React from 'react'
import "./ExploreFood.css"

function ExploreFood({foods}) {
  return (
    <div className='explore-food'>
        <h1>Explore Foods</h1>
        <div className="card-container">
            {foods.map((food , index) => (
                <div key={index} className='explore-food-card'>
                    <img src={food.image} alt={food.name} />
                    <p>{food.name}</p>
                </div>
            ))}
          
        </div>
        </div>
  )
}

export default ExploreFood