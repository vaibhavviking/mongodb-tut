const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Updating Records',()=>{
    
    var char;

    beforeEach((done)=>{
        char = new MarioChar({
            name : "Mario",
            weight : 100
        })
    
        char.save().then(()=>{
    
            done();
        })
    })

    it('Updates one record ',(done)=>{
        MarioChar.findOneAndUpdate({name : 'Mario'},{name : 'Luigi'}).then(()=>{
            MarioChar.findOne({_id: char._id}).then(result => {
                assert(result.name === 'Luigi');
                done();
            })
        })
    })

    it('Increments weight by 1',(done)=>{
      MarioChar.update({},{$inc : {weight : 1}}).then(()=>{
          MarioChar.findOne({name : 'Mario'}).then((result)=>{
              assert(result.weight === 101);
              done();
          })
      })

        
    })
});