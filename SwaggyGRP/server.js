const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconnect');

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.json())
const customerRoutes = require('./routes/customerRoutes');
app.use("/customer", customerRoutes);

app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, function(err){
    if(err) throw err;
    console.log('Server is running on port : ' + PORT);
});