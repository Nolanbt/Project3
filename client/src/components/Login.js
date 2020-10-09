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
        boxShadow: '0px 0px 1px 2px purple',
        color: 'white',
        height: 48,
        padding: '0 30px',
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
    group: {
        boxShadow: '0px 0px 5px 2px purple',
    }
});

function Login(props) {
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
                <ButtonGroup className={classes.group}>
                    <Button className={classes.root}>Create Account</Button>
                    <Button onClick={() => props.loginWithRedirect()} className={classes.root} style={{marginLeft: 5}}>Login</Button>
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