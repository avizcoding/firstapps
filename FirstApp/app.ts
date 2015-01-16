///<reference path='node/node.d.ts' />
///<reference path='node/express.d.ts' />

import http = require("http")
import path = require("path")
import express = require("express")
import index = require("./routes/index")
import user = require("./routes/user")

var app = express();

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
    app.use('/scripts/stylesheets', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
    app.use('/scripts/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', index.index);
app.get('/users', user.list);

var fs = require('fs');


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

