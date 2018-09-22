import React from 'react';

const Gallery = (props) => {

    const displayImgContainer = (e) => {
        let imgContainer = e.target.parentNode;
        imgContainer.classList.remove('gif-hidden');
        imgContainer.classList.add('gif-shown');

        let existing = localStorage.getItem('favorite');
        existing = existing.split(',');

        existing.forEach((item) => {
            if (item == e.target.src) {
                e.target.nextSibling.src = '/star.png';
            }
        })
    }

    const toggleFavorite = (e) => {
        let existing = localStorage.getItem('favorite');
        let gifSource = e.target.previousSibling.src;

        existing = existing ? existing.split(',') : [];

        if (existing.includes(gifSource)) {
            e.target.src = '/empty-star.png';
            let index = existing.indexOf(gifSource);
            existing.splice(index, 1);
        } else {
            e.target.src = '/star.png';
            existing.push(gifSource);
        }

        localStorage.setItem('favorite', existing.toString());
    }

    return (
        <div>
            {
                props.gifs.map((gif) => {
                    { console.log(gif) }
                    return (
                        <div className="img-container gif-hidden">
                            <img alt="a gif" className="gif-img" src={props.favorite ? gif : gif.images.fixed_height.url} 
                                onLoad={displayImgContainer} />
                            <img onClick={toggleFavorite} className="favorite-icon" src="/empty-star.png" />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Gallery