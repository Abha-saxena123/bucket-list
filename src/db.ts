//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
export const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
