const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const chartSchema= new Schema({
    name:String,   
    data:Array,
    period: String,   
})

const chartData=mongoose.model('chartData', chartSchema)

module.exports= chartData;
