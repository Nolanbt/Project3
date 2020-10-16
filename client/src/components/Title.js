import React from "react";
import Grid from '@material-ui/core/Grid';
import { Tween, SplitChars } from 'react-gsap';

const styles = {
    fontFamily: " 'Press Start 2P', cursive",
    color: "orange",
    textShadow: "5px 5px 2px black",
    textAlign: "center"
}

function Title(props) {
    return (
        <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item style={styles}>
                <Tween from={{ x: '200px' }} stagger={0.1} ease="elastic.out(0.2, 0.1)">
                    <SplitChars
                        wrapper={<div style={{ display: 'inline-block', fontSize: '40px' }} />}
                    >
                        CODE-E-MON
                    </SplitChars>
                </Tween>
            </Grid>
        </Grid>
    )
}

export default Title;