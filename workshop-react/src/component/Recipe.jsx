import styles from './Recipe.module.css'
import { useParams } from 'react-router-dom';
import recipes from '/src/assets/recipesList.js';

function Recipe() {
    const { id } = useParams();
    console.log(recipes[id - 1]);
    return (
        <>
            <h1>{recipes[id - 1].nameRecipe}</h1>
            <img src={recipes[id - 1].imgSrc} alt={recipes[id - 1].imgSrc} />
            <p>{recipes[id - 1].cookingTime}</p>
            <p>{recipes[id - 1].ingredients}</p>
            <p>{recipes[id - 1].recipeText}</p>
            <p>{recipes[id - 1].recipeSource}</p>
        </>
    )

}

export default Recipe
