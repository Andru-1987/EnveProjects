
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../modulesCss/SearchFilter.module.css"


function Search(){
    
    const [searchText,setSearchText]=useState('');

    let navigate=useNavigate();

    const handleEnter=(e)=>{
        
        if (e.key==='Enter'){    

            if(searchText!==''){
                navigate(`/billboard/?search=${searchText}`)
            }
            else{
                navigate('/billboard');
            }

        }
        
    }
    

    return (
        <div className={styles.container}>
            <input 
            className={styles.searchInput}
            type="text" 
            placeholder="Search movie"
            value={searchText}
            onKeyPress={(e)=>handleEnter(e)}
            onChange={(e)=>setSearchText(e.target.value.toLowerCase())}
            />
        </div>
    )
}


export default Search;