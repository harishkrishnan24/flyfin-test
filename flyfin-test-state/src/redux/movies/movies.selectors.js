import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

const selectConfig = state => state.config;

export const selectMoviesList = createSelector(
    [selectMovies, selectConfig],
    (movies, config) => {
        const currency = config.currencies.find(curr => curr.value === config.selectedCurrency)
        return movies.list.map(movie => ({ ...movie, name: movie.name[config.selectedLanguage], price: `${currency.key} ${movie.price[config.selectedCurrency]}` }));
    }
);