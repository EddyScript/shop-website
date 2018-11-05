var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');


var products = [new Product({
     imgagePath : 'https://www.lg.com/us/mobile-phones/v40-thinq/assets/images/hero/phone-hero.png',
     title: 'lgv40',
     price: 920,
}),
new Product({
    imgagePath : 'https://www.airtel.in/app/tc-service/airtel-devices-platform/rest/devices/image/v1/getImage?imageURL=/devices/pixel3xl/black/1.png',
    title: 'google pixel 3',
    price: 920,
}),
new Product({
    imgagePath : 'https://s12emagst.akamaized.net/products/16385/16384134/images/res_5a8494f4f2d1e98f090117c3c21a4880_full.jpg',
    title: 'samsung note 9',
    price: 920,
}),
];
var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length) {
          exit();  
        }
    })
}
function exit(){
    mongoose.disconnect();
}