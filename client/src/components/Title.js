import React from "react";
import Grid from '@material-ui/core/Grid';

const styles = {
    fontFamily: " 'Press Start 2P', cursive",
    color: "orange",
    textShadow: "5px 5px 2px black",
    textAlign: "center"
}

function Title(props){
    return(
        <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item>
                <h1 style={styles}>{props.text}</h1>
            </Grid>
        </Grid>
    )
}

export default Title;