import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (event: any) => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search for a card</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
