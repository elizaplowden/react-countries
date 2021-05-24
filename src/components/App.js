import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term){
    const response = await axios
      .get(`https://restcountries.eu/rest/v2/name/${term}`, {
        params: { query: term }
      }).then((response) => {
        console.log(response.data[0].capital);
      });
  }

  render() {
    return(
      <div className="ui container" style={{ marginTop: '10px'}}>
       <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
