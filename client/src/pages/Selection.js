import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from "@auth0/auth0-react";
import SpriteCard from "../components/SpriteCard";
import API from "../utils/API";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0px 5px 2px red',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10
    },
    other: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0px 5px 2px green',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10
    },
});

const styles= {
    body: {
    background: "radial-gradient(white, green 200%)",
    padding: "40vh",
    textAlign: "center",
    height: '100vh'
    },
    header: {
        marginTop: -260,
        fontFamily: " 'Press Start 2P', cursive",
    }
}

function Selection() {
    const classes = useStyles();
    const { logout, user, isAuthenticated } = useAuth0();
    const [sprites, setSprites] = useState([]);

    useEffect(()=>{
        if(isAuthenticated){
            API.getSprites()
            .then(({data})=> {
            setSprites(data.map(obj => ({
                name: obj.name,
                image: obj.image,
                id: obj._id
            })))
        })
        .catch(err =>console.log(err))
        }
        else{
            API.getSprites()
            .then(({data})=> {
            console.log(data)
            setSprites(data.map(obj => ({
                name: obj.name,
                image: obj.image,
                id: obj._id
            })))
        })
        .catch(err =>console.log(err))
        }
    },[])

    const handleSelect = (sprite) => {
        console.log(sprite)
        let selectedSprite = {
            id: sprite.id,
            name: sprite.name,
            image: sprite.image
        }
        API.selectSprite(selectedSprite)
        .then((res)=> alert(`You selected ${sprite.name} as your fighter.`))
        .catch(err =>console.log(err))
    }
    
    return (
        <div style={styles.body}>
            <h1 style={styles.header}>Select your Sprite</h1>
            <Grid container spacing={3} alignItems="center" justify="center" direction="row">
                {sprites.map((obj, index) => (
                <Grid item>
                    <SpriteCard key={obj.id} name={obj.name} image={obj.image} id={obj.id} handleSelect={handleSelect}/>
                </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} alignItems="center" justify="flex-end" direction="column">
                {isAuthenticated ? 
                <Button onClick={() => logout({ returnTo: window.location.origin })} className={classes.root}>Logout</Button>
                    :
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button className={classes.root}>Go Back</Button>
                </Link>
                }
                <Link to="/arena" style={{textDecoration: 'none'}}>
                    <Button className={classes.other}>Begin Battle!</Button>
                </Link>
            </Grid>
        </div>
    )
}

export default Selection;