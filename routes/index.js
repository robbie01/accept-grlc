module.exports = function(client) {
  var express = require('express');
  var router = express.Router();
  var qrcode = require('qrcode');

  router.post('/', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    client.request('addrequest', { amount: req.body.amount, memo: req.body.memo, expiration: 3600, force: true }, function(err, resp) {
      qrcode.toDataURL(resp.result.URI, function(err, qr) {
        res.render('index', { amount: resp.result.amount/100000000, address: resp.result.address, qrcode: qr });
      });
    });
  });

  return router;
}
