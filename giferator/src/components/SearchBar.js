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
        console.log(props.request(input));
    }

    const getTrending = () => {
        props.request('trending');
    }

    return (
        <div>
            <span className="display-3 mr-5 header">Giferator</span>
            <input onKeyDown={checkKey} spellCheck="false" id="gifSearchBar" type="text" className="" placeholder="Look for your favorite gifs" />
            <button onClick={handleInput} className="ml-3 btn btn-primary btn-lg text-white" id="searchButton">Go !</button>
            <button onClick={getTrending} className="ml-3 btn btn-outline-danger btn-lg" id="trending">Trending</button>
            <hr />
        </div>
    )
}

export default SearchBar;