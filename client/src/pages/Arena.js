import React, {useState, useEffect} from "react";
import Sprite from "../components/Sprite"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Move from "../components/Move"

const styles={
    margin: "15px 200px",
    background: "radial-gradient(white, green 200%)",
    border: "2px solid black",
    borderRadius: "5px"
}

function Arena () {
    const [move, setMove] = useState("");
    const [player, setPlayer] = useState({})
    const [enemy, setEnemy] = useState({})

    useEffect( () => {
        setEnemy({
            name: "Syntax Error",
            health: 100,
            image: "https://1.bp.blogspot.com/-Dz1WMgUXPSM/VUpYrBNDcNI/AAAAAAAACdY/R9JLNYs8fHo/s1600/flame_lancer_entity_000_hit.gif"
        })
        setPlayer({
            name: "Player Name",
            health: 100,
            image: "https://opengameart.org/sites/default/files/enemy%20trooper.gif"
        })
    }, [])

    const handleMove = (attack) => {
        let hp = enemy.health
        setMove(attack);
        setTimeout(function() {
            setEnemy({...enemy, health: hp-15})
            setMove("");
            return;
        }, 1500)
    }

    // https://opengameart.org/sites/default/files/enemy%20trooper.gif
    // https://1.bp.blogspot.com/-Dz1WMgUXPSM/VUpYrBNDcNI/AAAAAAAACdY/R9JLNYs8fHo/s1600/flame_lancer_entity_000_hit.gif

    return(
        <div style={styles}>
            <Grid container justify="flex-end">
                <Grid item>
                    <Sprite name={enemy.name} health={enemy.health} image={enemy.image}/>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Move move={move}/>
            </Grid>
            <Grid container justify="flex-start">
                <Grid item>
                    <Sprite name={player.name} health={player.health} image={player.image} handleMove={handleMove} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Arena;