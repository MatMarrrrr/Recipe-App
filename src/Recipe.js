import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>

            <div className="recipe-block-1">
                <h1>{title}</h1>
                <p>{Math.round(calories)} Calories</p>
                <img className={style.image} src={image} alt={title} />
            </div>

            <div className="recipe-block-2">
                <p>Ingredients:</p>

                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.text}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
}

export default Recipe;
