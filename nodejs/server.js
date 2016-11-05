var express=require('express');
var app=express();
app.set('view engine','pug');

app.listen(3000,function(){
	console.log("servidor corriendo");
});

app.get('/',function(req, res){
	res.render('index');
});
