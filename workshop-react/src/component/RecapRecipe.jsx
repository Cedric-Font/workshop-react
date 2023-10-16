import styles from './RecapRecipe.module.css'

function RecapRecipe({ props }) {

    return (
        <>
        <div className={styles.mainContainer} >
            {console.log(props)}
            <img  className={styles.img} src={props.imgSrc} alt={props.nameRecipe} />
            <ul>
                <li className={styles.name} >{props.nameRecipe}</li>
                <li className={styles.descriptionRecipe} >{props.descriptionRecipe}</li>
                <li className={styles.time} >{props.cookingTime}</li>
            </ul>
            </div>
        </>
    )
}

export default RecapRecipe
