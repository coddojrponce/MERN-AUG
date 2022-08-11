import styles from '../static/HelloWorld.module.css'


const HelloWorld = (props) => {
    const {name,age}=props

  return (
    <>

        <div  className={styles.box}>
          <div className={styles.header}>
            <h3>Name:{name}</h3>
          </div>
          
          <h3>Age:{age}</h3>
        </div>

    </>
    
  )
}

export default HelloWorld