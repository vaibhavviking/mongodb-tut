const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('some demo tests',()=>{
    
    it('save record to database',(done)=>{
        var char = new MarioChar({
            name : "Mario"
        })

        char.save().then(()=>{
            
            done();
        })

    });

});