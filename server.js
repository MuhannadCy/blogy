// Require necessary NPM Packages
const express = require('express')
const mongoose = require('mongoose')

// Require Routes Files
const indexRouter = require("./app/routes/index");
const articleRouter = require("./app/routes/articles");
// Instantiate Express Application Object
const app = express();

const db = require('./config/db')

mongoose.connect(db, {useNewUrlParser:true })
mongoose.connection.once('open', ()=>{
    console.log('Connected to Mongo')
})

// Define PORT for the API to run on
const port = process.env.PORT || 5000;
/*** Middleware ***/
// Add 'bodyParser' middleware which will parse JSON 
app.use(express.json())        
// Mount imported Routes
app.use(indexRouter);
app.use(articleRouter);
// Start the server to listen for requests on a given port
app.listen(port, ()=>{
    console.log(`blogy is listening on port ${port}`);
});