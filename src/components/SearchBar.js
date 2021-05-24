import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
  state = { term: ''};

  onFormSubmit = event => {
    // prevents form automatically submitting
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          // now we're defining an arrow function and passing it down into form
          // form will only invoke the arrow function one time
          onSubmit={this.onFormSubmit}
          className="ui form">
          <div className="field">
            <label>Country Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              // onChange={this.onInputChange}
              // arrow function apporoach - use when we have a single line of code to execute when callback is executed
              // onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
