const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/sprites"
);

const spriteSeed = [
    {
        email: "sprite@codeemon.com",
        name: "Syntax Error",
        image: "https://1.bp.blogspot.com/-Dz1WMgUXPSM/VUpYrBNDcNI/AAAAAAAACdY/R9JLNYs8fHo/s1600/flame_lancer_entity_000_hit.gif",
        health: 100,
        isFighting: false,
        // moves: [
        //     {
        //         move1: "https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif",
        //         power: 20
        //     }, 
        //     {
        //         move2: "https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif",
        //         power: -10
        //     }, 
        //     {
        //         move3: "https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif",
        //         power: 10
        //     }, 
        //     {
        //         move4: "https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400",
        //         power: 15
        //     }
        // ]
    },
    {
        email: "sprite@codeemon.com",
        name: "Debugger",
        image: "https://opengameart.org/sites/default/files/enemy%20trooper.gif",
        health: 100,
        isFighting: false,
        // moves: [
        //     {
        //         move1: "https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif",
        //         power: 20
        //     }, 
        //     {
        //         move2: "https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif",
        //         power: -10
        //     }, 
        //     {
        //         move3: "https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif",
        //         power: 10
        //     }, 
        //     {
        //         move4: "https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400",
        //         power: 15
        //     }
        // ]
    },
    {
        email: "sprite@codeemon.com",
        name: "Microsoft Defender",
        image: "https://gamesetwatch.com/exosuit_idle.gif",
        health: 100,
        isFighting: false,
        // moves: [
        //     {
        //         move1: "https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif",
        //         power: 20
        //     }, 
        //     {
        //         move2: "https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif",
        //         power: -10
        //     }, 
        //     {
        //         move3: "https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif",
        //         power: 10
        //     }, 
        //     {
        //         move4: "https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400",
        //         power: 15
        //     }
        // ]
    },
    {
        email: "sprite@codeemon.com",
        name: "Installation Wizard",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f861b9c-0ac0-4b33-9fcc-c387e684769c/da0cd9z-05f2333d-2a40-49c9-a5e5-7fa3e98abbf4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2Y4NjFiOWMtMGFjMC00YjMzLTlmY2MtYzM4N2U2ODQ3NjljXC9kYTBjZDl6LTA1ZjIzMzNkLTJhNDAtNDljOS1hNWU1LTdmYTNlOThhYmJmNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.GmCI6No1u9AiyaPO9ge2064YqAwJi70Lei7_uzoC3gI",
        health: 100,
        isFighting: false,
        // moves: [
        //     {
        //         move1: "https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif",
        //         power: 20
        //     }, 
        //     {
        //         move2: "https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif",
        //         power: -10
        //     }, 
        //     {
        //         move3: "https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif",
        //         power: 10
        //     }, 
        //     {
        //         move4: "https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400",
        //         power: 15
        //     }
        // ]
    }
];


const moveSeed = [
    {
        move1: "https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif", 
        power: 20
    },
    {
        move2: "https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif", 
        power: -10
    },
    {
        move3: "https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif", 
        power: 10
    },
    {
        move4: "https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400", 
        power: 15
    }
]

db.Sprites.remove({})
    .then(()=> db.Sprites.collection.insertMany(spriteSeed))
    .then(data=> {
        console.log(data.result.n + " sprites inserted");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })

db.Battle.remove({})
    .then(()=> db.Battle.collection.insertMany(moveSeed))
    .then(data=> {
        console.log(data.result.n + " moves inserted");
        process.exit(0);
    })
    .catch((err) => console.log(err))