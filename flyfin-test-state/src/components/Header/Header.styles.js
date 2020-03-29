import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        justifyContent: 'flex-end'
    },
    paddingLeft: {
        paddingLeft: theme.spacing(4)
    },
    title: {
        marginRight: 'auto'
    }
}));

export default useStyles;