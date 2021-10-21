import {useEffect, useState} from 'react';
import MovieCard from './MovieCard'


function Home() {

    const [movieList, setMovieList] = useState([]);
    
    

    useEffect(()=>{
       // const url = 'http://localhost:3001/movies';
        async function getOnlineData() {
            const result = await fetch('http://localhost:3001/movies');
            const json = await result.json();
            const data = json;
            setMovieList(data);
    
            };
             getOnlineData();
         }, []) 

   

    return(
        <div>
            <MovieCard props={movieList}/>
        </div>
    )
}

export default Home