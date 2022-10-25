import React from 'react'
import styles from './NavBar.module.css'
function NavBar() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>TRAVELLER</div>
        <div className={styles.left}>
            <span>Trips</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        <div className={styles.right}>
            <img src="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_icon_153438.png" alt="search" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2QQWYL9e8_Nrj6A9JII8vXiJuo25J74ceeBGjf73a0_nKErHSGiojNI&s=10" alt="bell" />
            <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=1380&t=st=1666704688~exp=1666705288~hmac=1e33f616c67969c6a61dc5" alt="profile"className={styles.avtar}/>
        </div>

    </div>
  )
}

export default NavBar