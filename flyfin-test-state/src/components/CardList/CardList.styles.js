import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
    },
    label: {
        borderBottom: '1px solid #d6cece',
        marginBottom: theme.spacing(4)
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}));

export default useStyles;
