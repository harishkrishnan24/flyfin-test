import { SET_CURRENCY, SET_LANGUAGE } from './config.types';

export const setCurrency = (currencyId) => ({
    type: SET_CURRENCY,
    payload: currencyId
});

export const setLanguage = (languageId) => ({
    type: SET_LANGUAGE,
    payload: languageId
});