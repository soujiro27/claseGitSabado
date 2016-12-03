var yo=require('yo-yo');
module.exports=function pansul()
{
return yo`<div class="container">
	<div class="row">
		<div class="col s3 m3 l4">
			<img src="GatoLogin.jpg" alt="gato" />
		</div>
		<div class="col s12 m12 l8">
			<h2>Entra la comunidad de fotos de Gatitos</h2>
			<form>
				 <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate">
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
			</form>
		</div>
	</div>
	<a href="/">Home</a>
</div>`;

return el;
}