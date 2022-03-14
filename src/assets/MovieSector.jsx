import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "../modulesCss/MoviesSector.module.css"
import Spinner from "./Spinner";


import getData from "../functions/httpGet";

export function MovieSector(){
    
    let [movies,setMovies]=useState([]);

    let [loading,setLoading]=useState(true);

    const setUrl='/discover/movie';

    useEffect(()=>{
        setLoading(true);
        getData(setUrl)
        .then(results=>results.results)
        .then(data=>{
            setMovies(data)});
            setLoading(false);
    
    },[]);
    
    if(loading){
        return <Spinner/>
    }

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

