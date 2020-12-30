const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/Author')


describe('Nesting records',()=>{
    

    beforeEach((done)=>{
       mongoose.connection.collections.authors.drop(()=>{
           done();
       }) 
    })

    it('Creates and author with sub-documents',(done)=>{
        var pat = new Author({
            name : 'Patrick Rothfuss',
            books : [{title : 'Name of The Wind',pages : 400}]
        });

        pat.save().then(()=>{
            Author.findOne({name : 'Patrick Rothfuss' }).then((record)=>{
                assert(record.books.length === 1);
                done();
            })
        })
    })


    it('Adds Book to an Author',(done)=>{
        var pat = new Author({
            name : 'Patrick Rothfuss',
            books : [{title : 'Name of The Wind',pages : 400}]
        });

        pat.save().then(()=>{
            Author.findOne({name : 'Patrick Rothfuss' }).then((record)=>{
                record.books.push({title : "Wise Man's Fear" , pages : 500});
                record.save().then(()=>{
                    Author.findOne({name : "Patrick Rothfuss"}).then(result => {
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })

    
})