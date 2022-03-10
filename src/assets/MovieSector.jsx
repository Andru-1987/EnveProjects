import React from "react";
import { MovieCard } from "./MovieCard";
import movies from "../movies.json"
import styles from "../modulesCss/MoviesSector.module.css"


export function MovieSector(){
    return (
        <div className={styles.maxContainer}>
            <ul className={styles.movieGrid}>
                {
                    movies.map(
                        (movie)=>(
                            <MovieCard key={movie.id} movie={movie}/>
                        )
                            
                    )
                }
            </ul>
        </div>
    );
}