import React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutoCompleteCombo = props => {
  const playLists = useSelector(state => state.PlayList.playLists);
  const playListNames = Object.keys(playLists);

  return (
    <Autocomplete
      id="free-solo-demo"
      onChange={(event, value) => props.setPlayListName(value)}
      freeSolo
      options={playListNames}
      renderInput={params => (
        <TextField
          {...params}
          label="playlist"
          margin="normal"
          variant="outlined"
          onChange={event => props.setPlayListName(event.target.value)}
        />
      )}
    />
  );
};

export default AutoCompleteCombo;
