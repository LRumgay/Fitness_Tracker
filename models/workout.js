const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({

    day: {
        type: Date,
        default: Date.now
    },
    exercises : [
        {
            type: String,
            trim: true,
            required: ""
        },
    ]

})