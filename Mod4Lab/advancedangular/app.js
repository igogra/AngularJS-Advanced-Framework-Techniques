var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/angular', express.static('node_modules/angular'));
app.use('**/bootstrap', express.static('node_modules/bootstrap'));

app.listen(2319, function() {
    console.log('Our app is listening on port 2319!');
});
