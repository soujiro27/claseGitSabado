var page=require('page');
var main=document.getElementById('mainContainer');
page('/',function(ctx, next)
{
	main.innerHTML='Home <a href=/login> login<a/>';
});

page('/login', function(ctx, next){
	main.innerHTML='login <a href=/> Home </a>';
});

page.start();