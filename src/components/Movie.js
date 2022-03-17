import React from 'react'
import styles from '../styles/Movie.module.css'

function Movie( { title }) {
  return (
    <div className={styles.movieTitle}>
        {title}
    </div>
  )
}

export default Movie