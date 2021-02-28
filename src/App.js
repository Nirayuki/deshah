import React from 'react';
import Header from '../src/components/Header';
import Routes from './routes';
import {Grid} from '@material-ui/core';

function App() {
  return (
      <Grid>
        <Header/>
        <Routes/>
      </Grid>
    
  );
}

export default App;
