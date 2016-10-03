var app = require('express')();
var path = require('path');
var port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(8080, () => console.log(`Example app listening on port ${port}`) );
