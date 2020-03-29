import { combineReducers } from 'redux';

import configReducer from './config/config.reducer';
import moviesReducer from './movies/movies.reducer';

export default combineReducers({
    config: configReducer,
    movies: moviesReducer
});