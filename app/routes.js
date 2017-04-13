module.exports = function(app){
    app.get("/", handleGet);
    app.post("/", handlePost);
    
    app.route("/book").get((req, res) =>{
        res.send("book get method call");
    });
     app.route("/user").get((req, res) =>{
        res.send("book post method call");
    });

    app.route("/login").post((req, res)=>{
        console.log(req.body);
        res.send("successfully login");
    });
    

    function handleGet(req, res) {

       res.send("get");
    }
     function handlePost(req, res) {

        res.send("post");
    }

}