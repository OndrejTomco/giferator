import React from 'react';
import '../App.css';

const SearchBar = (props) => {

    const checkKey = (e) => {
        if (e.keyCode === 13) {
            handleInput();
        }
    }

    const handleInput = () => {
        let input = document.getElementById('gifSearchBar').value;
        props.request(input);
    }

    const getTrending = () => {
        props.request('trending');
    }

    const getFavorite = () => {
        props.getFavorite();

    }

    return (
        <div className="search-group mt-2">
            <div className="form-inline">
                <h1 className="display-3 mr-5 mb-3 header d-inline-block">Giferator</h1>
                <div className="input-group">
                    <input onKeyDown={checkKey} spellCheck="false" type="text" className="form-control" id="gifSearchBar" placeholder="Look for your favorite gifs" />
                    <div className="input-group-append">
                        <button onClick={handleInput} className="btn btn-primary" type="button" id="searchButton">Go !</button>
                    </div>
                    <button onClick={getTrending} className="ml-3 btn btn-outline-danger" id="trending">Trending</button>
                    <button onClick={getFavorite} className="ml-3 btn btn-outline-success" id="favorite">Favorite</button>
                </div>

            </div>
        </div>
    )
}

export default SearchBar;