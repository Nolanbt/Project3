import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: 'linear-gradient(45deg, #34f8ee 30%, #a0e262 90%)'
    },
    image: {
        objectFit: "contain"
    }
});

function SpriteCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.image}
                    component="img"
                    alt="Sprite Thumbnail"
                    height="75"
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h6">
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <Button onClick={()=> props.handleSelect(props)} size="small" color="primary">
                    Select Character
                </Button>
        </Card>
    );
}

export default SpriteCard;