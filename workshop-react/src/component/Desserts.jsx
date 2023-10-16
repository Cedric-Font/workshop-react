import { useState } from "react";
import NavBar from './NavBar';
import recipes from '/src/assets/recipesList.js';
import RecapRecipe from "./RecapRecipe";
import styles from './Starter.module.css'
import { Navigate } from "react-router-dom";



export default function Starters() {
    const [display, setDisplay] = useState(0);

    return (
        <>
            <h1 className={styles.test} >Desserts</h1>
            <NavBar />
            {display === 0 ? recipes.map(recipe => recipe.type == 'dessert' ? < RecapRecipe key={recipe.id} recipe={recipe} setDisplay={setDisplay} /> : null) : <Navigate to={`/recipe/${display}`}></Navigate>}
        </>
    )
}

