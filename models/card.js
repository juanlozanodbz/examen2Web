const mongoose = require("mongoose")

const CardSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    number: {
        type: Number,
        required: true
    },

    color:{
        type: String,
        required: true
    },

    symbol: {
        type: String,
        required: true
    }
}, {collection: 'card'}
)

//Crear el modelo a partir del esquema definido
module.exports = mongoose.model('card', CardSchema)