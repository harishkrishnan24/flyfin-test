import { createSelector } from 'reselect';

const selectConfig = state => state.config;

export const selectCurrencies = createSelector(
    [selectConfig],
    config => config.currencies
);

export const selectLanguages = createSelector(
    [selectConfig],
    config => config.languages
);

export const selectedLanguage = createSelector(
    [selectConfig],
    config => config.selectedLanguage
);

export const selectedCurrency = createSelector(
    [selectConfig],
    config => config.selectedCurrency
);