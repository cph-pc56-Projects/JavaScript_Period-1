const expect = require('chai').expect;

const calc = require('../calc/calculator');

describe("Testing the calculator", function() {
    it('3 + 4 should return 7', function() {
        expect(calc.add(3, 4)).to.be.equal(7);
    })
});

const PORT = 1234;
const URL = 'http://localhost:' + PORT+"/calc/add/";
const request = require('request');
let server;


describe("Testing the CALC-API", function() {
    before(function(done) { // adding the done method, so we wait "done" to be called so we know the server is instantiated
        calc.calcServer(PORT, function(s){ // <-- in function we receive server from calcserver callback
            server = s;
            done();
        })
    });
    
    after(function() {
        server.close();
    });
    
    it('/4/7 should return 11', function(done) {
        request(URL+'4/7', function(err, res, body) {
            console.log(err);
            let result = Number(body);
            console.log("result", result);
            expect(result).to.be.equal(11);       
            done();     
        })        
    })
})