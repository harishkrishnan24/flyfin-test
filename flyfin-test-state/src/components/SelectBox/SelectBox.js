import React from 'react';

import { useTranslation } from "react-i18next";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from '../Header/Header.styles';

function SelectBox({ list, value, onHandleChange }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (<FormControl className={classes.formControl}>
        <Select value={value} onChange={onHandleChange} displayEmpty className={classes.selectEmpty}>
            {list.map(item => <MenuItem value={item.value} key={item.value}>{t(item.name)}</MenuItem>)}
        </Select>
    </FormControl>);
}

export default SelectBox;
