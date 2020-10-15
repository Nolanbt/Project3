const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const battleSchema = new Schema({
    moves: {
        type: Object,
        // default: ["https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif", 20]
    },
    // move2: {
    //     type: Array,
    //     default: ["https://media4.giphy.com/media/LUSWuXomJUaXpsFoQK/source.gif", -10]
    // },
    // move3: {
    //     type: Array,
    //     default: ["https://images.squarespace-cdn.com/content/v1/56e76a1101dbaef110916eb0/1544468004598-E847BRBNXHJXLY67OI5E/ke17ZwdGBToddI8pDm48kHgGgK_DdG2qa3eqol_lUsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzrTYq94zMtEEwt_jNlk5uS8P-LPd3CcrODytEU6YMy97EpPkXqxtlnib67YzsH4Yk/Fire+Ball.gif", 10]
    // },
    // move4: {
    //     type: Array,
    //     default: ["https://community.cisco.com/t5/image/serverpage/image-id/76276iD6492463E5E8D6F7/image-size/medium?v=1.0&px=400", 15]
    // }
})

const Battle = mongoose.model("Battle", battleSchema);

module.exports = Battle;