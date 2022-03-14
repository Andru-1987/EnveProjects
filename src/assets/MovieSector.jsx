import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "../modulesCss/MoviesSector.module.css"

import getData from "../functions/httpGet";

export function MovieSector(){
    
    let [movies,setMovies]=useState([]);

    

    const url='https://api.themoviedb.org/3/discover/movie';

    useEffect(()=>{
        getData(url)
        .then(data=>setMovies(data));
    
    },[]);
    

    return (
        <div className={styles.maxContainer}>
            <ul className={styles.movieGrid}>
                { movies.map(
                        (movie)=>(
                            <MovieCard key={movie.id} movie={movie}/>
                        )     
                    )
                }
            </ul>
        </div>
    );
}

