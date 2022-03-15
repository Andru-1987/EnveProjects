import React from "react";
import { Link } from "react-router-dom";
import styles from "../modulesCss/MovieCard.module.css";


const imageBase='https://image.tmdb.org/t/p/w300';

export function MovieCard({movie}){
    const imageURL=imageBase+movie.poster_path;


    return (
        <Link to={"/billboard/" + movie.id}>
        <li className={styles.movieList}>
        <img 
        className={styles.movieImage} 
        src={imageURL} 
        alt={movie.original_title}        
        width={200}
        height={300}
        >
        </img>
        <div>{movie.title}</div>

        </li>
        </Link>
    
    );
}