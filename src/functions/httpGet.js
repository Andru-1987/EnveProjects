

const options={
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWM3ZDQ5ZTkzOWY5OGEwN2QzMzg3MWRjYThkMTMwYyIsInN1YiI6IjYyMmI4NDA3YTU3OWY5MDA2ZjFlM2I4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gdH8ZsbmXnuUAGURAzVeG_BVuaPWButV4Nn9veD-X4',
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
