var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
	response.end("Hi there! I think you're a pretty swell guy!"); 
}
var server = http.createServer(handleRequest);
server.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
})



function handleRequest(request, response){
	response.end("You can be a jerk at times, and that's totally not cool, bro"); 
}
var server = http.createServer(handleRequest);
server.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
})