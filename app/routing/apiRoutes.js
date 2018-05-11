//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });
    
    //Create and save new friends with POST
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
     
    //clear out table
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friends = [];
        console.log(friends);
    });  
};