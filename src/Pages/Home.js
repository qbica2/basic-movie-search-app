import React from 'react'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Search from "../components/Search";
import Results from "../components/Results";

import { useSelector } from 'react-redux'

function Home() {

  const search = useSelector(state => state.search.search)
  
  return (
    <div className={`${styles.container} ${search && styles.alignCenter}`}>
      <Header/>
      <div className={styles.bottom}> 
      <Search/>
      <Results/>
      </div>

    </div>
  )
}

export default Home