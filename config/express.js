const express = require("express");
const bodyParser = require("body-Parser");
module.exports = function () {
    var app = express(); 
    app.use(bodyParser.urlencoded({encoded:false}));
    app.use(bodyParser.json());
    var routes = require("../app/routes");
    routes(app); //calling route js function        
    return app;
}