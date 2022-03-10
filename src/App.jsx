import React from "react";

import { MovieSector } from "./assets/MovieSector";
import { MovieTitle } from "./assets/MovieTitle";

export default function App(){

    return (
        <div>
        <header className="Header">
            <MovieTitle/>
        </header>
        <main>
            <MovieSector/>
        </main>
        </div>
    );

}
