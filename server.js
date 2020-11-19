const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs4550-f20-client-angular-zhamborova'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/src/index.html'));});

app.listen(process.env.PORT || 8080);
