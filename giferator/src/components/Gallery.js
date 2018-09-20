import React from 'react';

const Gallery = (props) => {

    return (
        <div>
            {props.gifs.map((gif) => <img alt="a gif" src={gif.images.fixed_height.url} />)}
        </div>
    );


}

export default Gallery