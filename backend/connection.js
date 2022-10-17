const mongoose = require('mongoose');

const dbName= "teamChatApp";

const url= `mongodb+srv://rifshah07:Welcome123@cluster0.5lrzfur.mongodb.net/${dbName}?retryWrites=true&w=majority `;

// Promise- a special type of object which needs to be resolved.
// asynchronous function(returns promise)- simultaneuosly kaam chalega,eg: mongoose.connect

mongoose.connect(url)
.then((result) => {
    console.log('database connected');

    
}).catch((err) => {
    console.log('err');

    
});

module.exports=mongoose; 