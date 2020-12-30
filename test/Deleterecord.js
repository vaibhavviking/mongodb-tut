const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Deleting Records',()=>{
    
    var char;

    beforeEach((done)=>{
        char = new MarioChar({
            name : "Mario"
        })
    
        char.save().then(()=>{
            assert(char.isNew === false);
            done();
        })
    })

    it('Deletes one record ',(done)=>{
        MarioChar.findOneAndRemove({name: 'Mario'}).then(()=>{
            MarioChar.findOne({name: "Mario"}).then((result) => {
                assert(result===null);
                done();
            })
        })
    })
});