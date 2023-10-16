import styles from './RecapRecipe.module.css'

function RecapRecipe(props ) {

    return (
        <>
        <div className={styles.mainContainer} >
            {console.log(props)}
            <img  className={styles.img} src={props.recipe.imgSrc} alt={props.recipe.nameRecipe} />
            <ul>
                <li className={styles.name} >{props.recipe.nameRecipe}</li>
                <li className={styles.descriptionRecipe} >{props.recipe.descriptionRecipe}</li>
                <li className={styles.time} >{props.recipe.cookingTime}</li>
            </ul>
            </div>
        </>

    )
}

export default RecapRecipe
