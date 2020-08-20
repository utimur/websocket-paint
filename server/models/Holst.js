const {Schema, model, ObjectId} = require('mongoose')


const Holst = new Schema({
    title: {type:String, required: true},
    img: {type: String},
    created: {type: Date, default: Date.now()},
    updated: {type: Date, default: Date.now()},
    owner: {type: ObjectId, ref: 'User'},
})

module.exports = model('Holst', Holst)
