const { Schema, model } = require('mongoose');

const ClasificationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

ClasificationSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Clasification', ClasificationSchema);