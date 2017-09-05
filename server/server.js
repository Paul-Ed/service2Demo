var restify = require('restify');
var path = require("path");

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer();

var diedir = path.join(__dirname, "..");
console.log("diedir", diedir);
server.get(/\/webapp\/.*/, restify.plugins.serveStatic({
    directory: diedir,
    default: 'app.html'
}));

server.get('/getIdType', function(request, response, next) {
    var idTypes = [
        {id:1, text: "Passport"},
        {id:2, text: "ID"},
        {id:3, text: "Drivers License"}
    ];

    response.send({results: idTypes});

});


server.get('/search', function(request, response, next) {
    var resultList = [
        {
            id: 12345,
            name: "Jim Beam",
            regNumber: "CX 12354",
            vehicleDescription: "Mazda 323",
            date: new Date(2016, 6, 5)
        }, {
            id: 12346,
            name: "Johannes L",
            regNumber: "CAW 36543",
            vehicleDescription: "Mercedes-Benz C220",
            date: new Date(2016, 7, 7)
        }, {
            id: 12347,
            name: "Ricky Louw",
            regNumber: "TZS 456 GP",
            vehicleDescription: "Golf 3 III",
            date: new Date(2016, 8, 1)
        }
    ];

    response.send(resultList);

});


server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});


