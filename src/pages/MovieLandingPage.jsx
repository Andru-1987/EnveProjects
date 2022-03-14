import React from "react";
import {Link} from "react-router-dom"
import styles from "../modulesCss/LandingPage.module.css"



export default function MovieLandingPage(){
    return (

        <div className={styles.welcome}>
            <Link to="/billboard">
                <h1 className={styles.mainWelcome}>
                    Welcome to a Cinema Billboard 
                </h1>
            </Link>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum soluta provident corporis laboriosam vitae repellat quis expedita quaerat voluptatum hic quae ex, recusandae commodi optio aliquam ducimus voluptatem officia nihil.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nostrum ratione quibusdam amet magni nobis dicta excepturi autem soluta aliquam, consequatur dignissimos reiciendis porro quos, quae voluptatum aut consectetur iusto.
            </p>
        </div>
    )
}

