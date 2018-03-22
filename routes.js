const http = require("http");
const url = require("url");
let routes = {};
onRequest = function (request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log(request.method + " " + pathname);
    if (typeof routes[request.method + pathname] === 'function') {
        routes[request.method + pathname](request, response);
    } else {
        //Handle 404 Error
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 Not Found");
    }
};
module.exports = {
    set: function (method, path, handler) {
        routes[method.toUpperCase() + path] = handler;
    },
    serverListen: function (port) {
        http.Server(onRequest).listen(port);
    }
};

