import styles from './RecapRecipe.module.css'

function RecapRecipe({ recipe, setDisplay }) {

    return (
        <div onClick={() => setDisplay(recipe.id)}>
            <img className="picture" src={recipe.imgSrc} alt={recipe.nameRecipe} />
            <ul className="list">
                <li className="puces">{recipe.nameRecipe}</li>
                <li>{recipe.descriptionRecipe}</li>
                <li>{recipe.cookingTime}</li>
            </ul>
        </div>
    )
}

export default RecapRecipe
