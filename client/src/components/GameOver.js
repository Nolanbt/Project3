import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';

const styles = {
    height: "150px",
    width: "150px",
}

function GameOver (props) {
    return (
        <div>
            {props.image ? <img style={styles} src={props.image} alt="Game Over"></img>: <div style={styles}></div>}
        </div>
    );
}

export default GameOver;