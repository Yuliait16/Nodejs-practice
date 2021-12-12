let http = require(`http`);
let fs = require(`fs`);

http.createServer(function (request, response) {

    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/index" || request.url === "/") {
        const filePath = __dirname + request.url + `.html`;
        fs.readFile(filePath, function (error, data) {
            response.end(data);
        });
    }
    else if (request.url === "/about") {
        const filePath = __dirname + `/about/about.html`;
        fs.readFile(filePath, function (error, data) {
            response.end(data);
        });
    }
    else if (request.url === "/services") {
        const filePath = __dirname + `/services/services.html`;
        fs.readFile(filePath, function (error, data) {
            response.end(data);
        });
    } else if (request.url === "/json") {
        response.setHeader('Content-Type', 'application/json');
        response.write(`{ 'file': 'JSON', 'content': 'custom text'}`);
        return response.end();
    } else if (request.url === '/post' && request.method === 'POST') {
        response.write(`Метод POST`);
        return response.end();
    } else if (request.url === '/put' && request.method === 'PUT') {
        response.write(`Метод PUT`);
        return response.end();
    } else if (request.url === '/patch' && request.method === 'PATCH') {
        response.write(`Метод PATCH`);
        return response.end();
    } else if (request.url === '/delete' && request.method === 'DELETE') {
        response.write(`Метод DELETE`);
        return response.end();
    } else {
        response.statusCode = 404;
        response.end(`Error. Unknown page`);
    }
}).listen(3000, `127.0.0.1`, function () {
    console.log(`Server was started on 127.0.0.1:3000`);
});


