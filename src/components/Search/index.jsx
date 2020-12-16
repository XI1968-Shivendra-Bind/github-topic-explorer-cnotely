import React from 'react';
import PropTypes from 'prop-types';

import { TextField, InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  input: {
    width: '100%'
  }
});

const Search = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <TextField style={{maxWidth: 360,}}
      className={classes.input}
      id="search-input"
      type='search'
      variant='outlined'
      placeholder="search"
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}
export default Search;