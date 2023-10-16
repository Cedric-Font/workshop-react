import styles from "./Recipe.module.css"

function Recipe (props) {

    return <>
        <div className={styles.container} >
       <h1 className={styles.name} >{props.nameRecipe}</h1>
       <img  className={styles.img} src={props.imgSrc} alt ={props.imgSrc}/>
       <p className={styles.time} >{props.cookingTime}</p>
       <p className={styles.ingredients} >{props.ingredients}</p>
       <p className={styles.text} >{props.recipeText}</p>
       <p className={styles.resource} >{props.recipeSource}</p>
       </div>
    </>
}

export default Recipe