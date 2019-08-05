import React from 'react';

const SearchBar = () => {
  return (
    <nav className="logger-navbar blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input type="search" id="search"/>
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
