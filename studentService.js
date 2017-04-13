const config = require("./config/config");
const server = require("./config/express");

var color =require("colors");
var app= server();

app.listen(config);
console.log("--------------------".green);
console.log("server started on port number-->"+config.port);

// ********** code with all routers

// var users = [{name:'yathish', rollNo: 123},{name:'shekar', rollNo: 232}];

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.get('/users', function(req, res){
//      res.send(users);
// });

// app.get('/users/:rollNo', function(req, res){
//     var rollNo = parseInt(req.params.rollNo);
//     var user = users.find(function (user){
//         return user.rollNo === rollNo;
//     })
//     res.send(user);   
// });

// app.post('/users',function(req, res){
//     var user = req.body;
//     users.push(user);
//     res.sendStatus(200);
// })

// app.get('/users/count',function(req, res){
//     res.send({count : users.length});
// })


// app.put('/users/:rollNo/:name', function(req, res){
//     var rollNo = parseInt(req.params.rollNo);
//     var name = req.params.user;

//     if(!rollNo){
//         res.sendStatus(500);
//     }
//     var index = users.findIndex(function (user){
//         return user.rollNo === rollNo;
//     });
//     if(index === -1){
//         res.sendStatus(404);
//     }
    
//     var user = users.find(function (user){
//        if(user.rollNo === rollNo){
//            return user.name = name;
//        }
//     })
//     res.sendStatus(200);

// });

// app.listen(3000, function(){
//     console.log("server started.....");
// });