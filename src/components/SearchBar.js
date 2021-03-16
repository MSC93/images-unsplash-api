import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmitBar(this.state.term);
  };

  render() {
    return (
      <div className="ui segment nav__color">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search for Image</label>

            <input
              type="text"
              value={this.state.term}
              placeholder="house, plane, dog ...etc."
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
