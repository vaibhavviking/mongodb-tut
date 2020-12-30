const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    
    mongoose.connect("mongodb://localhost/testaroo");

    mongoose.connection.once('open',() => {
        console.log('connection has been made')
        done();
}).on('error',(error) => {
    console.log(error);
})
})

beforeEach((done)=>{
    mongoose.connection.collections.mariochars.drop(()=>{
        done();
    })
})