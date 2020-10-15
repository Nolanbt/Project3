import React, {useState, useEffect} from "react";
import Sprite from "../components/Sprite"
import Grid from '@material-ui/core/Grid';
import Move from "../components/Move"
import API from "../utils/API"

const styles={
    margin: "15px 200px",
    background: "radial-gradient(white, green 200%)",
    border: "2px solid black",
    borderRadius: "5px",
    objectFit: "contain"
}

function Arena () {
    const [move, setMove] = useState("");
    const [player, setPlayer] = useState({})
    const [enemy, setEnemy] = useState({})

    useEffect( () => {
        API.getFighters()
        .then(({data})=> {
            console.log(data)
            setPlayer({
                name: data[0].name,
                image: data[0].image,
                health: data[0].health
            })
        })
        .catch(err =>console.log(err))
    }, [])

    useEffect(()=> {
        API.getSprites()
        .then(({data})=> {
            let rng = Math.floor(Math.random() * Math.floor(4))
            setEnemy({
                name: data[rng].name,
                image: data[rng].image,
                health: data[rng].health
            })
        })
    },[player])

    const handleMove = (attack) => {
        let hp = enemy.health
        setMove(attack);
        setTimeout(function() {
            setEnemy({...enemy, health: hp-15})
            setMove("");
            return;
        }, 1500)
    }

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