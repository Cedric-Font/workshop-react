<<<<<<< HEAD
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
=======
function RecapRecipe({ props }) {

    return (
        <>
            {console.log(props)}
            <img src={props.imgSrc} alt={props.nameRecipe} />
            <ul>
                <li>{props.nameRecipe}</li>
                <li>{props.descriptionRecipe}</li>
                <li>{props.cookingTime}</li>
            </ul>
>>>>>>> 8a44ee4a36fa4f815ad62ce3965135c38d9965a9
        </>

    )
}

export default RecapRecipe
