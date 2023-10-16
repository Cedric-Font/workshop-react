import styles from "./recipe.module.css"

function Recipe (props) {

    return <>
       <h1 className={styles.name} >{props.nameRecipe}</h1>
       <img  className={styles.img} src={props.imgSrc} alt ={props.imgSrc}/>
       <p className={styles.time} >{props.cookingTime}</p>
       <p className={styles.ingredients} >{props.ingredients}</p>
       <p className={styles.text} >{props.recipeText}</p>
       <p className={styles.resource} >{props.recipeSource}</p>
    </>
}

export default Recipe