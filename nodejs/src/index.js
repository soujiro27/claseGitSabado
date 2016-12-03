var page=require('page');
var empty=require('empty-element');
/*-------dependencias----*/
var inicio=require('./main');
var post=require('./post');

page('/',function(ctx, next){
var container=document.getElementById('mainContainer');
	empty(mainContainer).appendChild(inicio);
});

page('/timeline',function(ctx,next){
	var container=document.getElementById('mainContainer');
	var nombres=['js','python','ruby','go','haskell','java','php'];
empty(container).appendChild(post(nombres));

});



page.start();