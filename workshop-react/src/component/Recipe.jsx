import styles from './Recipe.module.css'
import { useParams } from 'react-router-dom';
import recipes from '/src/assets/recipesList.js';


function Recipe() {
    const { id } = useParams();
    console.log(recipes[id - 1]);
    return (
        <>
        <div>
            <div className='container' >
            <h1 className={styles.title}>{recipes[id - 1].nameRecipe}</h1>
            <img className={styles.picture} src={recipes[id - 1].imgSrc} alt={recipes[id - 1].imgSrc} />
            <p className={styles.time}>{recipes[id - 1].cookingTime}</p>
            <p className={styles.ingredients}>{recipes[id - 1].ingredients}</p>
            <p className={styles.text}>{recipes[id - 1].recipeText}</p>
            <p className={styles.source}>{recipes[id - 1].recipeSource}</p>
            </div>
        </div>
        </>
    )

}

export default Recipe
