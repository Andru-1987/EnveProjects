

const options={
    headers:{
        Authorization: 'Bearer ' + process.env.REACT_APP_API_AUTH,
        'Content-Type': 'application/json;charset=utf-8'
    }
}


const urlBase='https://api.themoviedb.org/3';    

async function getData(endPoint){
    
    let url=urlBase+endPoint;

    const response=await fetch(url,options);
    const data=await response.json();

    
    return data;
}


// const getData=async(url,options)=>{
//     const response=await fetch(url,options);
//     const data=await response.json();
    
//     setMovies(data.results);
// }


export default getData;

