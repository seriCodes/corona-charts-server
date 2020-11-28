const chartData = require('../models/chartData');
// const mongoose = require ('mongoose')


console.log('data ran')
const severeSick=[10 , 101, 130, 100, 140, 200]

new chartData({
    name:"severe-sick",
    data:severeSick,
    period: null,   
}).save().then(function(){
    console.log('success saved')
    console.log(char.isNew==false)
})



///
const breathAid=[5, 10, 20, 100, 240, 200]

  new chartData({
    name:"breath-aid",
    data:breathAid,
    period: null,   
}).save().then(function(){
    console.log('success saved')
    console.log(char.isNew==false)
})

// chartData.remove({}, function(err) { 
//     console.log('collection removed') 
//  });

// export {severeSick, breathAid}