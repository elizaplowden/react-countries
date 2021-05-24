import React from 'react';
import SearchBar from './SearchBar';
import countries from '../api/countries';
import CountryList from './CountryList';

class App extends React.Component {
  // default property
  state = { name: '' };

  onSearchSubmit = async term => {
    const response = await countries
      .get(`/rest/v2/name/${term}`, {
        params: { query: term }
      });

      this.setState({
        name: response.data[0].name,
        capital: response.data[0].capital,
        population: response.data[0].population });
  }

  render() {
    return(
      <div className="ui container" style={{ marginTop: '10px'}}>
       <SearchBar onSubmit={this.onSearchSubmit}/>
  {/*     <h2>{this.state.name}</h2>
       <p>Capital: {this.state.capital}</p>
       <p>Population: {this.state.population}</p>*/}
       <CountryList />
      </div>
    );
  }
}

export default App;
