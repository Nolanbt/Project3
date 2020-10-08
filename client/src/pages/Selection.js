import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px red',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10
    },
    other: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px green',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10
    },
});

function Selection() {
    const classes = useStyles();

    return (
        <div>
            <h1>
                Selection Page
            </h1>
            <Grid container spacing={2} alignItems="flex-end" justify="flex-end" direction="column">
                <Button className={classes.root}>Go Back</Button>
                <Button className={classes.other}>Begin Battle!</Button>
            </Grid>
        </div>
    )
}

export default Selection