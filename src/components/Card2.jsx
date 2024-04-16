import styles from '../css/Card2.module.css'

function Card2(props) {
  return (
    <>
    <div className={styles.card}>
        <p>{props.text}</p>
        <img src={props.img} className={styles.pic} alt="фотография уточки" />
    </div>  
    </>
  )
}

export default Card2