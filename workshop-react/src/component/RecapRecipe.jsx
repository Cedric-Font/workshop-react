import styles from './RecapRecipe.module.css'

function RecapRecipe({ props }) {

    return (
        <>
            {console.log(props)}
            <img className="picture" src={props.imgSrc} alt={props.nameRecipe} />
            <ul className="list">
                <li className="puces">{props.nameRecipe}</li>
                <li>{props.descriptionRecipe}</li>
                <li>{props.cookingTime}</li>
            </ul>
        </>
    )
}

export default RecapRecipe
