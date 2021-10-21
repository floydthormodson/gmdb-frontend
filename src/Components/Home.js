import {useEffect, useState} from 'react';



function Home() {

    const [movieList, setMovieList] = useState([]);
    
    

    useEffect(()=>{
       // const url = 'http://localhost:3001/movies';
        async function getOnlineData() {
            const result = await fetch('http://localhost:3001/movies');
            const json = await result.json();
            const data = json;
            setMovieList(data[0]?.poster);
    
            };
             getOnlineData();
         }, []) 

   

    return(
        <div>
            <img src={movieList} alt="poster"/>
        </div>
    )
}

export default Home