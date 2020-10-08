import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginLeft: 5
    },
    other: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0px 5px 2px yellow',
        color: 'white',
        height: 48,
        padding: '0 30px',
        textDecoration: "none"
    },
});

function Login() {
    const classes = useStyles();



    return (
        <Grid container spacing={2} alignItems="center" justify="center" direction="column">
            <Grid item>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                </form>
            </Grid>
            <Grid item>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
                </form>
            </Grid>
            <Grid item>
                <ButtonGroup >
                    <Button className={classes.root}>Create Account</Button>
                    <Button className={classes.root}>Login</Button>
                </ButtonGroup>
            </Grid>
            <Grid item>
                <Link to="/selection" style={{textDecoration: "none"}}>
                    <Button className={classes.other}>Continue as Guest</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Login;