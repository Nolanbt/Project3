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
                        <Button onClick={()=> props.handleMove(props.movesList[0].move, props.movesList[0].power)} >React</Button>
                        <Button onClick={()=> props.handleMove(props.movesList[1].move, props.movesList[1].power)}>Mongo</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Button onClick={()=> props.handleMove(props.movesList[2].move ,props.movesList[2].power)}>jQuery</Button>
                        <Button onClick={()=> props.handleMove(props.movesList[3].move, props.movesList[3].power)}>API</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
}

export default Sprite;