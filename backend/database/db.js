const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('BD Connect');
}).catch(error => {
    console.log('BD Connect err', error);
})