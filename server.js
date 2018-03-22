const Routes = require("./routes");

// Create Routes here.
Routes.set("get", "/", function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Custom Routing");
    response.end();
});

Routes.set("get", "/hello", function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
});

Routes.set("post", "/post", function (request, response) {
    let incoming = "";
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
Routes.serverListen(9999);
console.log("Server has started. Listing port " + 9999);