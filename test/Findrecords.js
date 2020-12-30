const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Finding Records',()=>{
    
    var char;

    beforeEach((done)=>{
        char = new MarioChar({
            name : "Mario"
        })
    
        char.save().then(()=>{
            
            done();
        })
    })

    it('Finds one record',(done)=>{
        MarioChar.findOne({name : 'Mario'}).then((result)=>{
            assert(result.name === 'Mario');
            done();
        })
    })

    it('Finds one record by ID',(done)=>{
        MarioChar.findOne({_id : char._id }).then((result)=>{
            assert(result._id.toString() === char._id.toString());
            done();
        })
    })
});