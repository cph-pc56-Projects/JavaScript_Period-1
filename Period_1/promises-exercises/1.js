var secureRandoms = {
    'title': '6 Secure Randoms',
    'randoms': [

    ]
}

var createHex = function(size) {
    require('crypto').randomBytes(size, function(err, buffer) {
        let secureHex = buffer.toString('hex');
        // console.log(secureHex);
        let hex = String (secureHex);   
        console.log(hex);     
        secureRandoms.randoms.push(hex);
    })
}


// for (var i = 48 ; i >= 8; i = i - 8) {
//     createHex(i);  
// }
// secureRandoms.randoms.push(createHex(2));
console.log(secureRandoms);
