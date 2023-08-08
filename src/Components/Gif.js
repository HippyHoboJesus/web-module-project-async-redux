import React from "react";

const Gif = (props) => {
    const { gif } = props;

    return(
        <div class="gif">
            <h3>{gif.title}</h3>
            <p>{gif.username}</p>
            <img width="200" src={gif.images.original.url}/>
            <p>Rating: <strong>{gif.rating}</strong></p>
            <a target="_blank" href={gif.url}><button>Check it out on giffy</button></a>
        </div>
    )
}

export default Gif;