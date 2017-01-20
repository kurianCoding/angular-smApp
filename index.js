express=require('express');
var os = require('os');

app=express();
var port=8800;
app.use('/',express.static(__dirname+'/templates/'));
app.use('/node_modules',express.static(__dirname+'/node_modules/'));
app.use('/js',express.static(__dirname+'/templates/js/'));
app.use('/comments',express.static(__dirname+'/templates/comments/'));
app.get('/api',function(req,resp){
    resp.send({"message":"hello world","status":200});
});
app.post('/api',function(req,resp){
    console.log("post api");
});
app.put('/api',function(req,resp){
    console.log("put api");
});



var interfaces = os.networkInterfaces();
var addresses = [];

for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

console.log(addresses[0]+":"+port);

app.listen(port);
