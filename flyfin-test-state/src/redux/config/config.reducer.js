import { SET_CURRENCY, SET_LANGUAGE } from './config.types';

const INITIAL_STATE = {
    selectedLanguage: 'en',
    selectedCurrency: 'usd',
    languages: [
        { value: 'en', name: 'English' },
        { value: 'de', name: 'Deutsch' },
        { value: 'it', name: 'Italiano' }
    ],
    currencies: [
        { key: '$', name: 'USD', value: 'usd' },
        { key: '€', name: 'Euro', value: 'euro' },
        { key: '₹', name: 'Rupee', value: 'rupee' }
    ]
};

const configReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENCY: {
            return {
                ...state,
                selectedCurrency: action.payload
            }
        }
        case SET_LANGUAGE: {
            return {
                ...state,
                selectedLanguage: action.payload
            }
        }
        default:
            return state;
    }
};

export default configReducer;