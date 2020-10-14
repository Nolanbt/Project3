import axios from "axios";

export default {
    getSprites: function () {
        return axios.get("/api/sprites/all");
    },
};