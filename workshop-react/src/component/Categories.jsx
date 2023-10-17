import styles from './Category.module.css';

export default function Categories(props){


 


    return(
        <div className={styles.container} >
       { props.acceuil.map((element, index) => (
        <div key={index+2} className={styles.container} >
            <h2 key ={index} className={styles.title} >{element.title}</h2>
            <img key={index+1} className={styles.acceuilImg} src={element.img} alt="" />
        </div>
       )
       )
       }
        </div> 




    )
}