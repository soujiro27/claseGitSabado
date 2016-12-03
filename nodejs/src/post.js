var yo=require('yo-yo');
module.exports=function(post)
{
	return yo`<div class="row">
	<div class="col l3">
		${post.map(function(index, elem) {
			return "<h2>"+index+"</h2>";
		})}
	</div>
</div>`;



}