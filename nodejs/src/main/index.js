var yo = require('yo-yo');

var template=yo`<div class="container">
	<div class="row">
		<div class="col l4">
			<img src="GatoLogin.jpg" alt="Gato" />
		</div>
		<form action="" class="col l6">
			<div class="row">
				<div class="input-field col s12">
	          		<input  id="user" type="text" class="validate">
	          		<label for="user">Usuario</label>
        		</div>
        		<div class="input-field col s12">
	          		<input  id="password" type="password" class="validate">
	          		<label for="password">Password</label>
        		</div>
        		<div class="input-field col s12">
        			<input type="submit" class="btn" value="Entrar">
        		</div>		
			</div>
		</form>
	</div>
</div>`;

module.exports=  template;
