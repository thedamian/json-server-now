var jsonServer = require('json-server');
var rewrites = require('./rewriter.json') 
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var rewriter = jsonServer.rewriter(rewrites);
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;


server.use(middlewares);
server.use(rewriter);
server.use(router);
server.listen(port, function () {
  console.log('JSON Server is running');
})
