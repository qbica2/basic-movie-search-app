import React,{ useState } from 'react'
import styles from "../styles/Search.module.css"
import SearchIcon from '@mui/icons-material/Search';

import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/Searchslice';
import { getMovies } from "../redux/Movielistslice";

function Search() {

    const [searchInput,setSearchInput] = useState("")

    const dispatch = useDispatch();

    const handleSearch = (e) => {
      e.preventDefault()
      dispatch(setSearch(searchInput))
      dispatch(getMovies(searchInput))
      
    }

    const handleClear = (e) => {
      e.preventDefault()
      dispatch(setSearch(""))
      dispatch(getMovies(""))
      setSearchInput("")
    }


  return (
    <div className={styles.search}>
        <div className={styles.title}>Movie Title</div>
    <label>
        <SearchIcon color="disabled" className ={styles.icon}/>
        <input type="text" placeholder="search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
    </label>
        <div className={styles.buttons}>
            <button onClick={(e)=>handleClear(e)} className={styles.clearBtn}>clear</button>
            <button onClick={(e)=>handleSearch(e)} className={styles.searchBtn}>search</button>
        </div>
    </div>
  )
}

export default Search
