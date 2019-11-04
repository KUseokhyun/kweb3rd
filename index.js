const calc = require('./calc');
const url = require('url');
const querystring = require('querystring');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let pathname = url.parse(req.url).pathname;
    let query = querystring.parse(url.parse(req.url).query);
    let factorA = parseInt(query.a);
    let factorB = parseInt(query.b);
    let operator = query.operator;
    try {
        if (pathname != "/" || !query.a || !query.b || !query.operator) {
            thorw;
        }
        else if (operator == "add") {
            res.end("Result: " + calc.add(factorA, factorB))
        }
        else if (operator == "sub") {
            res.end("Result: " + calc.subtract(factorA, factorB))
        }
        else if (operator == "mult") {
            res.end("Result: " + calc.multi(factorA, factorB))
        }
        else if (operator == "div") {
            res.end("Result: " + calc.div(factorA, factorB))
        }
    }
    catch (e) {
        if (pathname != "/") {
            res.end("Page Not Found!");
        }
        if (!query.a || !query.b || !query.operator) {
            res.end("Invalid Query!");
        }
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});