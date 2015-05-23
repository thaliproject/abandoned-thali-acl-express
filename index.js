var express = require('express');
var app = express();

var ThaliAclDb = require('thali-acl'); // TODO: Make this configurable

app.get('/usersperrole:role', function (req, res) {

});

var server = app.listen(8085); // TODO: Make configurable
