import { useState, useEffect } from "react"


const MovieCard = ({props}) => {

    
    
    return ( 
        <div> 
            {props.map((element,index) => (<img src={element.poster}/>))}
        </div>  
    )

}

export default MovieCard