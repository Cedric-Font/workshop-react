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
        </>
    )
}

export default RecapRecipe
