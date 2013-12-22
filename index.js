#!/usr/bin/env node

var request = require('request');
var xml2js = require('xml2js');
var inspect = require('eyes').inspector({maxLength: false})

request.get('http://thegamesdb.net/api/GetGamesList.php?name=metal+gear', function (err, res) {
  if (err) return console.error(err);
  console.dir(res.body);

  xml2js.parseString(res.body, function(err, json) {
    if (err) return console.error(err);
    inspect(json);
  });
});