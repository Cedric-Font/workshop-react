function Recipe (props) {

    return <>
       <h1>{props.nameRecipe}</h1>
       <img src={props.imgSrc} alt ={props.imgSrc}/>
       <p>{props.cookingTime}</p>
       <p>{props.ingredients}</p>
       <p>{props.recipeText}</p>
       <p>{props.recipeSource}</p>
    </>
}

export default Recipe