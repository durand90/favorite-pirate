const mongoose = require('mongoose');


const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [3, '{PATH} must be at least 3 characters']
    },
    image: {
        type: String,
        minlength: [3, '{PATH} must be at least 3 characters']
    },
    treasureChests: {
        type: Number,
        required: [true, '{PATH} is required']
    },
    catchPhrase: {
        type: String
    },
    crewPosition: {
        type: String
    },
    pegLeg: {
        type: Boolean
    },
    eyePatch: {
        type: Boolean
    },
    hookHand: {
        type: Boolean
    }
}, {timestamps: true});

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;