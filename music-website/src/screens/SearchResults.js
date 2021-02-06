import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '../components/Layout/Grid';
import EmptyResults from '../components/EmptyResults/EmptyResults';

const SearchResults = props => {
  const urlParams = new URLSearchParams(props.location.search);
  const searchTerm = urlParams.get('search_term');
  const list = useSelector(state => state.AlbumList.albums);
  const albumList = Object.values(list);
  const filteredResults = albumList.filter(name => name.namePlusArtist
    .toString()
    .toLowerCase()
    .includes(searchTerm.toString().toLowerCase())
  );

  return (
    <>
      {filteredResults.length > 0 ? (
        <Grid
          list={filteredResults}
          title={`Search results for ${searchTerm}...`}
        />
      ) : (
        <EmptyResults
          mainwrapper
          msg={`Search Results for ${searchTerm}`}
          btnMsg="Check all Albums here!"
        />
      )}
    </>
  );
};

export default SearchResults;
