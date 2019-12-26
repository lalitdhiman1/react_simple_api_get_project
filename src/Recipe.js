import React from 'react'

const Recipe = ({title, ingredients, calorie, image}) => {
    return (
        <div className="mainBox" style={{backgroundImage:`url(${image})`}}>
            <div className="blackBox" >
            <h2>{title}</h2>
            <ol>
                {ingredients.map((ing,i) =>(
                    <li key={i}>{ing.text}</li>
                ))}
            </ol>
            <p>Total calories: {calorie}</p>
            </div> 
        </div>
    )
}

export default Recipe
