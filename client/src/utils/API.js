import axios from "axios";

export default {
    getSprites: function () {
        return axios.get("/api/sprites/all");
    },

    selectSprite: function (sprite) {
        return axios.post("/api/sprites/add" , sprite)
    },

    getFighters: function () {
        return axios.get("/api/sprites/battle");
    }
};