var page=require('page');
var yo=require('yo-yo');
var login=require('./login');
console.log(login);
var main=document.getElementById('mainContainer');
page('/',function(ctx, next)
{
main.innerHTML='Home <a href=/login> login<a/>';
});

page('/login', function(ctx, next){

main.appendChild(login.pansul());
});

page.start();

console.log('loq eu sea');