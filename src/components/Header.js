import React from 'react'
import styles from "../styles/Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.title}> OMDb API</div>
        <div className={styles.subtitle}>The Open Movie Database 🍿</div>  
    </div>
  )
}

export default Header