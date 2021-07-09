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

MovieSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Movie', MovieSchema);