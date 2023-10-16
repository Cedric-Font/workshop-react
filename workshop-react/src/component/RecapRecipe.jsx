function RecapRecipe (props){

    return (
        <>
        <figure>
            <img src={props.imgSrc} alt={props.imgSrc}/>
                <ul>
                   <li>{props.nameRecipe}</li> 
                   <li>{props.descriptionRecipe}</li>
                   <li>{props.cookingTime}</li>
                </ul>
        </figure>
        </>
    )
}

export default RecapRecipe
