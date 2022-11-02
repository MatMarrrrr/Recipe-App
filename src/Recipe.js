import React from "react";
import style from './recipe.module.css';
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>

            <div className="recipe-block-1">
                <h1>{title}</h1>
                <p>{Math.round(calories)} Calories</p>
                <img className={style.image} src={image}></img>
            </div>

            <div className="recipe-block-2">
                <p>Ingredients:</p>

                <ul>
                    {ingredients.map(ingredient => (
                        <li>
                            {ingredient.text}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
}

export default Recipe;