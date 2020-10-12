import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles={
    body: {
        margin: "15px"
    },
    sprite: {
        height: "150px",
        width: "150px",
    },
    font: {
        fontFamily: " 'Press Start 2P', cursive",
        fontSize: "15px"
    }   
}

function Sprite(props) {
    return (
        <div style={styles.body}>
            <Grid container spacing={2} direction="column" justify="flex-end">
                <Grid item>
                    <h3 style={styles.font}>{props.name}</h3>
                    <img style={styles.sprite} src={props.image} alt="Placeholder"></img>
                </Grid>
                <Grid item>
                    <span style={{textAlign: "center"}}>{props.health}/100</span>
                    <LinearProgress variant="determinate" color="secondary" value={props.health} />
                </Grid>
                <Grid item>
                    <ButtonGroup variant="text" color="primary" aria-label="contained primary button group">
                        <Button onClick={()=> props.handleMove("https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif")} >React</Button>
                        <Button onClick={()=> props.handleMove("https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif")}>Mongo</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Button onClick={()=> props.handleMove("https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif")}>jQuery</Button>
                        <Button onClick={()=> props.handleMove("https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400")}>API</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
}

export default Sprite;