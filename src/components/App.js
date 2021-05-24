import React from 'react';
import SearchBar from './SearchBar';
import countries from '../api/countries';
// import CountryList from './CountryList';

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
        population: response.data[0].population,
        language: response.data[0].languages[0].name,
        region: response.data[0].region,
        flag: response.data[0].flag });
  }

  render() {
    return(
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <h2>{this.state.name}</h2>
         <p>Capital: {this.state.capital}</p>
         <p>Population: {this.state.population}</p>
         <p>Language: {this.state.language}</p>
         <p>Region: {this.state.region}</p>
         <img src={this.state.flag} alt="flag" />
    {/*  <CountryList name={this.state.name}/>*/}
      </div>
    );
  }
}

export default App;
