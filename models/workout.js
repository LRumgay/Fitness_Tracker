const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trime: true,
                required: "Enter name for ..."
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name for ..."
            },
            duration : {
                type: Number
            },
            weight : {
                type: Number
            },
            reps : {
                type: Number
            },
            sets : {
                type: Number
            },
            distance : {
                type: Number
            },

        }
    ]
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;