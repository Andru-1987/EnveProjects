import React from "react";
import spinner from "../modulesCss/Spinner.module.css"


function Spinner(){
    return (
        <div className={spinner.container}>
            <div className= {spinner['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}


export default Spinner;