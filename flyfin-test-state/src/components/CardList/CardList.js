import React from 'react';
import Typography from '@material-ui/core/Typography';

import Card from '../Card/Card';
import useStyles from './CardList.styles';

function CardList({ list }) {
    const classes = useStyles();

    return (<div className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.label}>
            Collection
        </Typography>
        <div className={classes.list}>
            {list.map(item => <Card key={item.id} imgUrl={item.imgUrl} title={item.name} value={item.price} />)}
        </div>
    </div>);
}

export default CardList;
