const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    clasification: {
        type: Schema.Types.ObjectId,
        ref: 'Clasification'
    }
});

module.exports = model('Movie', MovieSchema);