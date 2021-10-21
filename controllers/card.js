const Card = require("../models/card")

exports.postAddCard = async(req,res)=>{
    const card = new Card(req.body);
    try{
        await card.save()
        console.log(card)
        console.log("Card registered")
    } catch(err) {
        console.log(err)
    }
}

exports.viewCards = async(req,res)=>{
    const card = new Card(req.body);
    try{
        await card.save()
        console.log(card)
        console.log("Card registered")
    } catch(err) {
        console.log(err)
    }
}

