import React, { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import styles from "../modulesCss/MoviesSector.module.css"
import Spinner from "../components/Spinner";

import getData from "../functions/httpGet";
import useLoc from "../Hooks/useLoc";

export function MovieSector(){
    
    let [movies,setMovies]=useState([]);

    let [loading,setLoading]=useState(true);

    const allMovies='/discover/movie';
    const searchMovies='/search/movie?query=';

    const query=useLoc();
    const search=query.get('search');
    
    
    useEffect(()=>{
        
        setLoading(true);

        const url=search
        ?searchMovies+search
        :allMovies;

        getData(url)
        .then(results=>results.results)
        .then(data=>{
            setLoading(false);
            setMovies(data);
            }
        );

    },[search]);
    


    
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

