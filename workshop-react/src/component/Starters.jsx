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
            <NavBar />
            <h1 className={styles.test} >Starters</h1>
            {display === 0 ? recipes.map(recipe => <RecapRecipe key={recipe.id} recipe={recipe} setDisplay={setDisplay} />) : <Navigate to={`/recipe/${display}`}></Navigate>}

        </>
    )
}

