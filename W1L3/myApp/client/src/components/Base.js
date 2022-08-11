
import styles from '../static/Base.module.css'


const Base = (props) => {
  return (
    <div>
        <div className={styles.container}>
        <h2>{props.name}</h2>
        {props.children}


        </div>

    </div>
  )
}

export default Base

