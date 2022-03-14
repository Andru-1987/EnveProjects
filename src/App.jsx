import React from "react";

import {BrowserRouter as Router,
    Routes,Route,Link
} from "react-router-dom";



import { MovieSector } from "./assets/MovieSector";
import MovieTitle from "./assets/MovieTitle";
import MovieHomePageTitle from "./assets/MoviesHomePageTitle";
import MovieLandingPage from "./pages/MovieLandingPage";
import MovieDetails from "./pages/MovieDetails";

import styles from "./modulesCss/MovieHeader.module.css"


export default function App(){

    return (
        <Router>
        <header >
            <nav className={styles.header}>
                <Link to="/">
                    <MovieHomePageTitle/>
                </Link>
                <Link to="/billboard">
                    <MovieTitle/>
                </Link>
            </nav>
        </header>
        <main>
            <Routes>
                <Route exact path="/billboard/" element={<MovieSector />} />
                <Route path="/" element={<MovieLandingPage/>} />
                <Route extact path="/billboard/:movieId" element={<MovieDetails/>}/>
            </Routes>
        </main>
        </Router>
    );

}
