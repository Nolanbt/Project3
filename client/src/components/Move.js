import { PromiseProvider } from "mongoose";
import React from "react";

const styles = {
    height: "150px",
    width: "150px",
}

function Move (props) {
    return (
        <div>
            {props.move ? <img style={styles} src={props.move} alt="Move Animation"></img>: <div style={styles}></div>}
        </div>
    );
}

export default Move;

// https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif  React
// https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif     Mongo
// https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400   API
// https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif
