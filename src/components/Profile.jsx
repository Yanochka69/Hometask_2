import styles from '../css/Profile.module.css'

function Profile(props) {
  return (
    <>
    <div className={styles.for_personal_card}>
        <a href="https://vk.com/yana_mellet">
            <img src={props.img} className={styles.photo} alt="фотография" />
        </a>
        <p> {props.fullname} </p>
    </div>  
    </>
  )
}

export default Profile