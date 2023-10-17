
import styles from './RecapRecipe.module.css'

function RecapRecipe({ recipe, setDisplay }) {

    return (
        <>
            <div className={styles.mainContainer} onClick={() => setDisplay(recipe.id)}>
                <img className={styles.img} src={recipe.imgSrc} alt={recipe.nameRecipe} />
                <ul>
                    <li className={styles.name} >{recipe.nameRecipe}</li>
                    <li className={styles.descriptionRecipe} >{recipe.descriptionRecipe}</li>
                    <li className={styles.time} >{recipe.cookingTime}</li>
                </ul>
            </div>


        </>

    )
}

export default RecapRecipe
