import React from 'react'
import styles from "../styles/Results.module.css"
import Movie from "./Movie";

import { useSelector } from 'react-redux';

function Results() {

  const search = useSelector(state => state.search.search)
  const movies = useSelector(state => state.movie.movieList);

  const firstThreeMovies = movies?.slice(0, 3);

  return (
    <div className={styles.results}>
        {
          search ? 
          (
            <div className={styles.title}>Result for "{search}"</div>
          ) 
          : 
          (
            <div className={styles.title}>Search results will appear here</div>
          )
        }
        <div className={styles.movies}>
          {
            search && 
            (
              <div className={styles.subtitle}>click on a movie title to learn more about it</div>
            )
          }
          {
            firstThreeMovies?.map(movie => (
              <Movie key={movie.imdbID} title={movie.Title} />
            ))
          }
        </div>
    </div>
  )
}

export default Results