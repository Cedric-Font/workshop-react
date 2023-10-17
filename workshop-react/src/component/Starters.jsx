import { useState } from "react";
import NavBar from './NavBar'
import recipes from '/src/assets/recipesList.js'
import RecapRecipe from "./RecapRecipe";


export default function Starters() {
    const [display, setDisplay] = useState(0);

    return (
        <>
            <h1>Starters</h1>
            <NavBar />
            {display === 0 ? recipes.map(recipe => <RecapRecipe key={recipe.id} props={recipe} />) : null}
        </>
    )
}

