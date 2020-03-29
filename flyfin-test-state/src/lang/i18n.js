import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from './locale/en';
import it from './locale/it';
import de from './locale/de';
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            it,
            de
        },
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
        },
    });
export default i18n;