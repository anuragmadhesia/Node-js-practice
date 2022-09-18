const mongoose= require('mongoose');
const gunSchema= new mongoose.Schema({
    name:String,
    type:String,
    size:Number
});

module.exports = mongoose.model('guns',gunSchema);