import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';

const styles = {
    fontFamily: " 'Press Start 2P', cursive",
    color: "black",
    textShadow: "5px 5px 2px white",
    textAlign: "center"
}

function GameOver(props) {
    return (
        <div>
            <Grid contianer spacing={2} alignItems="center" justify="center" direction="column">
                <Grid item>
                    {props.image ? <h1 style={styles} >Game Over</h1> : <div style={styles}></div>}
                </Grid>
                <Grid item>
                    {props.image ?
                        <Link to="/selection" >
                            <Button  variant="contained" color="secondary">Back to Character Selection</Button>
                        </Link> :
                        ""}
                </Grid>
            </Grid>
        </div>
    );
}

export default GameOver;