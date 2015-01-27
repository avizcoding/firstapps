///<reference path='node/node.d.ts' />
///<reference path='node/express.d.ts' />

import http = require("http")
import path = require("path")
import express = require("express")
import index = require("./routes/index")
import user = require("./routes/user")

var requirejs = require("requirejs");
requirejs.config({
    baseUrl: __dirname,
    //paths: {
    //    "src": "/src"
    //},
    shim: {
        "Login": {
            exports: "Login",
            //init: function () {
            //    return {
            //        class: Login.LoginController
            //    }
            //}
        },
    },
    nodeRequire: require
});

requirejs(["src/login.controller"], function (controller) {
    console.log("RET");
});

var app = express();
//var server = require("./server/server.js");
//server.init("newDB");

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    //app.set('view engine', 'jade');
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/src', express.static(__dirname + '/src'));
    app.use('/views', express.static(__dirname + '/views'));
    app.use('/scripts/js', express.static(__dirname + '/node_modules/requirejs'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', index.index);
app.get('/users', user.list);
//app.get("/Movies", function (req, res) {
//    var movies = server.getMovies();
//    console.log(movies);
//    res.render('Movies', { title: movies });
//});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

