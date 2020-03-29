import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    selectBox: {
        root: {
            borderBottom: '1px solid white',
        },
        icon: {
            fill: 'white',
        },
    }
}));

export default useStyles;