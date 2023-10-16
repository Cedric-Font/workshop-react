function RecapRecipe({ recipe, setDisplay }) {

    return (
        <div onClick={() => setDisplay(recipe.id)}>
            {console.log(recipe)}
            <img src={recipe.imgSrc} alt={recipe.nameRecipe} />
            <ul>
                <li>{recipe.nameRecipe}</li>
                <li>{recipe.descriptionRecipe}</li>
                <li>{recipe.cookingTime}</li>
            </ul>
        </div>
    )
}

export default RecapRecipe
