import { Link } from 'react-router-dom';
import styles from './Category.module.css';

export default function Categories({ acceuil }) {

    return (
        <div className={styles.container}>
            {acceuil.map((element, index) => (
                <Link to={element.redirect} key={index} className={styles.container}>
                    <h2 className={styles.title}>{element.title}</h2>
                    <img className={styles.acceuilImg} src={element.img} alt="" />
                </Link>
            )
            )
            }
        </div >




    )
}