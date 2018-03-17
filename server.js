var http = require("http");
var customRoute = require("./routes");
const port = 9999;


// Create Routes here.

customRoute.route.for("get", "/", function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Custom Routing");
    response.end();
});

customRoute.route.for("get", "/hello", function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
});

customRoute.route.for("post", "/post", function (request, response) {
    var incoming = "";
    request.on('data', function (chunk) {
        incoming += chunk.toString();
    });
    request.on('end', function () {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(incoming);
        response.end();
    });
});

//Start Server
http.createServer(customRoute.onRequest).listen(port);

console.log("Server has started. Listing port " + port);