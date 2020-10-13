const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    date: {
        type : Date,
        default : Date.now
    },
    user: [{type: Schema.Types.ObjectId, ref: 'WeatherUsers'}]
});

module.exports = Fav = mongoose.model("WeatherUserFav", favSchema);