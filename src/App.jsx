import React from "react";

import {BrowserRouter as Router,
    Routes,Route,NavLink
} from "react-router-dom";



import { MovieSector } from "./pages/MovieBillboard";
import MovieTitle from "./components/MovieTitle";
import MovieHomePageTitle from "./components/MoviesHomePageTitle";
import MovieLandingPage from "./pages/MovieLandingPage";
import MovieDetails from "./pages/MovieDetails";

import styles from "./modulesCss/MovieHeader.module.css"
import Search from "./components/SearchFilter";


export default function App(){

    return (
        <Router>
        <header className={styles.container}>
            <nav className={styles.header}>
                <Search/>

                <div className={styles.containerLinks}>
                <NavLink 
                className={styles.Link}
                to="/billboard">
                    <MovieTitle/>
                </NavLink>
                <NavLink 
                className={styles.Link}
                to="/">
                    <MovieHomePageTitle/>
                </NavLink>
                </div>

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
