const mongoose = require("mongoose")
// URI => user:password@IP:port/db_name?authSource=db_usuarios
mongoose.connect('mongodb://user8:root@54.227.9.233:27017/base8?authSource=admin')
    .then(()=>{
         console.log("Succesful Connection")
    })
    .catch(err=>console.log(err))

//Definir esquema -> Estructura del documento de entrada en la coleccion
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
}, {collection: 'card', unique: true}
)

//Crear el modelo a partir del esquema definido
const Card = mongoose.model('card', CardSchema)

//Agregar un domcumento
const card1 = new Card({
    number: 1,
    color: "Red",
    symbol: "Diamonds",
    _id: new mongoose.Types.ObjectId()
})



//CREATE
card1.save()
    .then(()=>{
        console.log(card1)
        console.log("Card created")
    })
    .catch(err=>console.log(err))