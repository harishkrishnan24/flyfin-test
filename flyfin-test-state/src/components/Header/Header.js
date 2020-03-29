import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useTranslation } from "react-i18next";

import useStyles from './Header.styles';
import SelectBox from '../SelectBox/SelectBox';

import { selectCurrencies, selectLanguages, selectedLanguage, selectedCurrency } from '../../redux/config/config.selectors';
import { setCurrency, setLanguage } from '../../redux/config/config.actions';

function Header(props) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const { languages, currencies, selectedLanguage, selectedCurrency, setCurrency, setLanguage } = props;

    const onCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const onLanguageChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (<div className={classes.root}>
        <AppBar position="static" color="transparent">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>
                    {t('Brand')}
                </Typography>
                <div className={classes.paddingLeft}>
                    <SelectBox list={languages} value={selectedLanguage} onHandleChange={onLanguageChange} />
                </div>
                <div className={classes.paddingLeft}>
                    <SelectBox list={currencies} value={selectedCurrency} onHandleChange={onCurrencyChange} />
                </div>
            </Toolbar>
        </AppBar>
    </div>);
}

const mapStateToProps = createStructuredSelector({
    languages: selectLanguages,
    currencies: selectCurrencies,
    selectedLanguage,
    selectedCurrency
});

const mapDispatchToProps = dispatch => ({
    setCurrency: currencyId => dispatch(setCurrency(currencyId)),
    setLanguage: languageId => dispatch(setLanguage(languageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
