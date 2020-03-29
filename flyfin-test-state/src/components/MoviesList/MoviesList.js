import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CardList from '../CardList/CardList';
import { selectMoviesList } from '../../redux/movies/movies.selectors';

function MoviesList(props) {
    const { movies } = props;

    return <CardList list={movies} />
}

const mapStateToProps = createStructuredSelector({
    movies: selectMoviesList
});

export default connect(mapStateToProps)(MoviesList);
