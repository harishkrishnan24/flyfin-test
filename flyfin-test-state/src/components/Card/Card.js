import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import useStyles from './Card.styles';

function CardComponent({ title, imgUrl, value }) {
    const classes = useStyles()

    return (<Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={imgUrl}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    {value}
                </Button>
            </CardActions>
        </CardActionArea>
    </Card>);
}

export default CardComponent;
