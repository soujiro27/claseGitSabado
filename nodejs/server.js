var express=require('express');
var app=express();
app.set('view engine','pug');

app.use(express.static('public'));

app.listen(3000,function(){
	console.log("servidor corriendo");
});

app.get('/',function(req, res){
	res.render('index');
});

app.get('/login',function(req, res){
	res.render('index');
});




