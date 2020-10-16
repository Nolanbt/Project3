import React, {useState, useEffect} from "react";
import Sprite from "../components/Sprite"
import Grid from '@material-ui/core/Grid';
import Move from "../components/Move"
import API from "../utils/API";
import GameOver from "../components/GameOver";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"

const styles={
    margin: "15px 200px",
    background: "radial-gradient(white, green 200%)",
    border: "2px solid black",
    borderRadius: "5px",
    objectFit: "contain"
}

function Arena () {
    const [move, setMove] = useState("");
    const [otherMove, setOtherMove] = useState("")
    const [movesList, setMovesList] = useState([])
    const [player, setPlayer] = useState({})
    const [enemy, setEnemy] = useState({})
    const [results, setResults] = useState({gameOver: false, image: "https://pngimg.com/uploads/game_over/game_over_PNG57.png"})

    useEffect( () => {
        API.getFighters()
        .then(({data})=> {
            setPlayer({
                name: data[0].name,
                image: data[0].image,
                health: data[0].health
            })
            setMovesList([
                {
                    move: data[0].moves[0].move1,
                    power: data[0].moves[0].power1,
                },
                {
                    move: data[0].moves[0].move2,
                    power: data[0].moves[0].power2,
                },
                {
                    move: data[0].moves[0].move3,
                    power: data[0].moves[0].power3,
                },
                {
                    move: data[0].moves[0].move4,
                    power: data[0].moves[0].power4,
                }
            ])
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
    },[])

    useEffect(()=>{
        if(player.health <= 0) {
            setResults({...results, gameOver: true})
            alert(`You have been defeated by ${enemy.name}`)
        }else if (enemy.health <= 0) {
            setResults({...results, gameOver: true})
            alert(`${player.name} is victorious!`)
        }
    }, [enemy.health, player.health])

    const enemyMove = (rng) => {
        setMove("");
        setOtherMove(movesList[rng].move)
        if(rng === 1){
            setTimeout(function() {
                setEnemy({...enemy, health: enemy.health-(-10)})
                    setOtherMove("");
                    return;
                }, 1500)
        }
        else{
            setTimeout(function() {
                setPlayer({...player, health: player.health-(movesList[rng].power)})
                    setOtherMove("");
                    return;
                }, 1500)
        }
        
    }

    const handleMove = (attack, power) => {
        let rng = Math.floor(Math.random() * Math.floor(4))

        switch(attack) {
            case movesList[0].move:
                setMove(attack);
                setTimeout(function() {
                    let newHP = enemy.health-(movesList[0].power)
                    setEnemy({...enemy, health: newHP})
                    if(newHP > 0){
                        enemyMove(rng);
                    }
                        return;
                    }, 1500)
                break;
            case movesList[1].move:
                setMove(attack);
                setTimeout(function() {
                    let newHP = player.health-(movesList[1].power)
                    setPlayer({...player, health: newHP})
                        enemyMove(rng);
                        return;
                    }, 1500)
                break;
            case movesList[2].move:
                setMove(attack);
                setTimeout(function() {
                    let newHP = enemy.health-(movesList[2].power)
                    setEnemy({...enemy, health: enemy.health-(movesList[2].power)})
                    if(newHP > 0){
                        enemyMove(rng);
                    }
                        return;
                    }, 1500)
                break;
            case movesList[3].move:
                setMove(attack);
                setTimeout(function() {
                    let newHP = enemy.health-(movesList[3].power)
                    setEnemy({...enemy, health: enemy.health-(movesList[3].power)})
                    if(newHP > 0){
                        enemyMove(rng);
                    };
                        return;
                    }, 1500)
                break;

        }
    }

    return(
        <div style={styles}>
            <Grid container justify="flex-end" direction="row">
                <Grid item>
                    <Move move={move}/>
                </Grid>
                <Grid item>
                    <Sprite name={enemy.name} health={enemy.health} image={enemy.image}/>
                </Grid>
            </Grid>
            <Grid container justify="center">
                {results.gameOver? <GameOver image={"https://pngimg.com/uploads/game_over/game_over_PNG57.png"}/> : 
                <GameOver image={""}/>}
            </Grid>
            <Grid container justify="flex-start" direction="row">
                <Grid item>
                    <Sprite name={player.name} health={player.health} image={player.image} movesList={movesList} handleMove={handleMove} />
                </Grid>
                <Grid item>
                    <Move move={otherMove}/>
                </Grid>
            </Grid>
            <Link to="/selection" style={{textDecoration: 'none'}}>
                    <Button>Back to Character Selection</Button>
            </Link>
        </div>
    )
}

export default Arena;