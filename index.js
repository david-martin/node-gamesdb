#!/usr/bin/env node

var request = require('request');
var xml2js = require('xml2js');

exports.getGamesList = function(opts, cb) {
  var query = encodeURIComponent(opts.query);

  request.get('http://thegamesdb.net/api/GetGamesList.php?name=' + query, function (err, res) {
    if (err) return cb(err);
    //console.dir(res.body);

    xml2js.parseString(res.body, function(err, json) {
      if (err) return cb(err);
      // inspect(json);
      return cb(null, json);
    });
  });
};