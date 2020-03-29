import React from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <MoviesList />
      </Container>
    </div>
  );
}

export default App;
