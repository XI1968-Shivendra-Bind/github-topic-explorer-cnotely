import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Search from './components/Search';
import Topic from './components/Topic';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mb: {
    marginTop: 16
  },
}));



function App() {
  const classes = useStyles()
  const initialTopic = 'react'
  const [searchTerm, setSearchTerm] = useState(initialTopic)
  return (
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="sm" >
        <Typography variant="h4" className={classes.mb} >Search topics on GitHub</Typography>
        <Search value={searchTerm} onChange={setSearchTerm} />
        <Topic name={searchTerm} setSearch={setSearchTerm} />
      </Container>
    </React.Fragment >
  )
}

export default App;
