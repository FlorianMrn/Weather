const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    date: {
        type : Date,
        default : Date.now
    }
});

module.export = Fav = mongoose.model("WeatherUserFav", favSchema);