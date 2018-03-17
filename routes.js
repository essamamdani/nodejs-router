var url = require("url");

const route = {
    routes: {},
    for: function (method, path, handler) {
        this.routes[method.toUpperCase() + path] = handler;
    }
}
module.exports = {
    route,
    onRequest: function (request, response) {
        var pathname = url.parse(request.url).pathname;
        if (typeof route.routes[request.method + pathname] === 'function') {
            route.routes[request.method + pathname](request, response);
        } else {
            //Handle 404 Error
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.end("404 Not Found");
        }
    }
}