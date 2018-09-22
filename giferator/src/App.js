import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGifs: [],
      favorite: false
    };
  }

  componentDidMount() {
    this.getGif('trending');
  }

  getFavorite = () => {
    let existing = localStorage.getItem('favorite');
    existing = existing ? existing.split(',') : [];
    this.setState({ currentGifs: existing, favorite: true });
  }

  getGif = async (input) => {
    let url;
    if (input === 'trending') url = 'http://api.giphy.com/v1/gifs/trending?&api_key=tjj2FSAfz5EZ4BpIJ72JbeFVKNzIHOxw';
    else url = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=tjj2FSAfz5EZ4BpIJ72JbeFVKNzIHOxw';

    this.setState({ currentGifs: [] });
    const response = await fetch(url);
    const json = await response.json();
    // console.log(JSON.stringify(json.data, null, 2));

    this.setState({ currentGifs: json.data, favorite: false });
  }

  render() {
    return (
      <div className="App">
        <SearchBar request={this.getGif} getFavorite={this.getFavorite} />
        <div className="wrapper text-left">
          <div className="col">
            <Gallery gifs={this.state.currentGifs} favorite={this.state.favorite} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
