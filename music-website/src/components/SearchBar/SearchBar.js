import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './_searchbar.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [navigateToSearchPage, setNavigateToSearchPage] = useState(false);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = e => {
    const sTerm = e.target.value;
    if (e.key === 'Enter' && sTerm.length > 0) {
      setNavigateToSearchPage(true);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="search-bar"
      />
      {navigateToSearchPage && (
        <Redirect
          to={{
            pathname: '/search',
            search: `?search_term=${searchTerm}`,
          }}
        />
      )}
    </>
  );
};

export default SearchBar;
