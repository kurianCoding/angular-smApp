express=require('express');
app=express();
var port=8800;
app.use('/',express.static(__dirname+'/templates/'));
app.use('/node_modules',express.static(__dirname+'/node_modules/'));
app.use('/js',express.static(__dirname+'/templates/js/'));
app.use('/comments',express.static(__dirname+'/templates/comments/'));
app.listen(port);
