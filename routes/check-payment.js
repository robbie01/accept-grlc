 module.exports = function(client) {
  var express = require('express');
  var router = express.Router();

  router.get('/', function(req, res, next) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    var interval = setInterval(function() {
      client.request('getrequest', { key: req.query.address }, function(err, resp) {
        var status = resp.result.status;
        if (status !== 'Pending') {
          res.write("data: " + status + "\n\n");
          clearInterval(interval);
        }
      });
    }, 5000);
  });

  return router;
}
