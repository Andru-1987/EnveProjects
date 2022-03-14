import React from "react";
import styles from "../modulesCss/MovieDetails.module.css";
import gradient from "../modulesCss/GradientBorder.module.css"


import movies from "../movies.json";
import { useParams } from "react-router-dom";

const imageBase='https://image.tmdb.org/t/p/w300';


function MovieDetails(){
    let {movieId}=useParams();

    let id=window.location;
    console.log(id);



    const movie=movies[0];
    const imageURL=imageBase+movie.poster_path;
    

    return (
        <div className={styles.container}>

            <img 
            className={styles.poster}
            src={imageURL} 
            alt={movie.original_title}
            width={"40%"}
            height={"auto"}
            />
            <div className={styles.data}>
                <p className={`${styles.mainTitle} ${gradient.gradientBorder}`}>{movie.original_title}</p>
                <p>
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