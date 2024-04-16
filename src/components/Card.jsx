import styles from '../css/Card.module.css'

function Card(props) {
  return (
    <>
    <div className={styles.card}>
        <p>{props.text}</p>
        <ul className={styles.ul_style}>
            <li className={styles.li_style}>{props.firstElem}</li>
            <li className={styles.li_style}>{props.secondElem}</li>
        </ul>
        <img className={styles.pic} src={props.img} alt="фотография котика" />
    </div>  
    </>
  )
}

export default Card