var restify = require('restify');
var path = require("path");

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer();

var diedir = path.join(__dirname, "..");
console.log("diedir", diedir);
server.get(/\/client\/.*/, restify.plugins.serveStatic({
    directory: diedir,
    default: 'app.html'
}));

server.get('/getYearModel', function(request, response, next) {
    var idTypes = [];
    var endYear = new Date().getFullYear();
    var startYear = endYear  - 15;
    for (var i = startYear; i <= endYear; i++) {
        idTypes.push({
            id:i,
            text: ""+i
        });
    }

    response.send({results: idTypes});

});


server.get('/getIdType', function(request, response, next) {
    var idTypes = [
        {id:1, text: "Passport"},
        {id:2, text: "ID"},
        {id:3, text: "van server"},
        {id:4, text: "Drivers License"}
    ];

    response.send({results: idTypes});

});

server.get('/getBrand', function(request, response, next) {
    var arr = [
        {id:1, text: "Corsa"},
        {id:2, text: "BMW"},
        {id:3, text: "Nissan"},
        {id:4, text: "Opel"}
    ];

    response.send({results: arr});

});


server.get('/getModel', function(request, response, next) {
    var model = [
        {id:1, text: "Lite"},
        {id:2, text: "C class"},
        {id:3, text: "Hardbody"},
        {id:4, text: "Benz"}
    ];

    response.send({results: model});

});

server.get('/getFuel', function(request, response, next) {
    var model = [
        {id:1, text: "Petrol"},
        {id:2, text: "Diesel"}

    ];

    response.send({results: model});

});

server.get('/getRange', function(request, response, next) {
    var range = [
        {id:1, text: "1.6"},
        {id:2, text: "2L"},
        {id:3, text: "3LV6"},
        {id:4, text: "1L"}
    ];

    response.send({results: range});

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


