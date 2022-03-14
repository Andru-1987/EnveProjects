

const options={
    headers:{
        Authorization: 'Bearer ' + process.env.REACT_APP_API_AUTH,
        'Content-Type': 'application/json;charset=utf-8'
    }
}


    
async function getData(url){


    const response=await fetch(url,options);
    const data=await response.json();
    
    let movies=await data.results;
    
    return movies;
}


// const getData=async(url,options)=>{
//     const response=await fetch(url,options);
//     const data=await response.json();
    
//     setMovies(data.results);
// }


export default getData;
