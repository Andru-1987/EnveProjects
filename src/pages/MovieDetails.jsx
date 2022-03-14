import React, { useEffect, useState } from "react";

import styles from "../modulesCss/MovieDetails.module.css";
import gradient from "../modulesCss/GradientBorder.module.css"
import getData from "../functions/httpGet";
import Spinner from "../assets/Spinner";
import { useParams } from "react-router-dom";

const imageBase='https://image.tmdb.org/t/p/w300';


function MovieDetails(){
    let {movieId}=useParams();
    let [movie,setMovie]=useState(null);
    let [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        setLoading(true);   
        let endPoint=`/movie/${movieId}`;
        getData(endPoint)
        .then(data=>
            {
                setMovie(data);
                setLoading(false);
            }
            )
    },[movieId]);
    


    if (loading){
        return <Spinner/>
    }

    return (

        <div className={styles.container}>
            
            <img 
            className={styles.poster}
            src={`${imageBase}${movie.poster_path}`} 
            alt={movie.original_title}
            width={"40%"}
            height={"auto"}
            />
            <div className={styles.data}>
                <p className={`${styles.mainTitle} ${gradient.gradientBorder}`}>{movie.original_title}</p>
                <p>
                    Genres:{movie.genres.map((e,index)=>{
                        return <span key={index} style={{'margin':'5px'}}>{e.name}</span>
                    })}
                    <br />
                    Votes:{movie.vote_average}
                    <br />
                    Fecha de Lanzamiento: {movie.release_date}
                    <br />
                    Idioma original: {movie.original_language}
                </p>
                <p>
                    Sinopsis: {movie.overview}
                </p>
            </div>
            
        </div>
    );
}

export default MovieDetails;